"use client";

import type {Prediction} from "@/types";

import {useFormState, useFormStatus} from "react-dom";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {createPrediction, getPrediction} from "@/actions";
import {Skeleton} from "@/components/ui/skeleton";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function FormContent() {
  const {pending} = useFormStatus();

  return (
    <>
      {pending ? <Skeleton className="h-[480px] w-[512px]" /> : null}
      <Input
        accept="image/*"
        defaultValue="https://replicate.delivery/pbxt/IJZOELWrncBcjdE1s5Ko8ou35ZOxjNxDqMf0BhoRUAtv76u4/room.png"
        name="image"
        placeholder="https://replicate.delivery/pbxt/IJZOELWrncBcjdE1s5Ko8ou35ZOxjNxDqMf0BhoRUAtv76u4/room.png"
        type="file"
      />
      <Textarea name="prompt" placeholder="An industrial bedroom" />
      <Button disabled={pending}>Crear</Button>
    </>
  );
}

export default function HomePage() {
  const [state, formAction] = useFormState(handleSubmit, null);

  async function handleSubmit(_state: null | Prediction, formData: FormData) {
    let prediction = await createPrediction(formData);

    while (["starting", "processing"].includes(prediction.status)) {
      prediction = await getPrediction(prediction.id);

      await sleep(4000);
    }

    return prediction;
  }

  return (
    <section className="m-auto grid max-w-[512px] gap-4">
      {state?.output ? <img alt="Previsualización del render" src={state.output[1]} /> : null}
      <form action={formAction} className="grid gap-4">
        <FormContent />
      </form>
    </section>
  );
}
