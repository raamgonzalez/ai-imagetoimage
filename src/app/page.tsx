"use client";

import type {Prediction} from "@/types";
import {useFormState} from "react-dom";
import {createPrediction, getPrediction} from "@/actions";
import FormContent from "@/components/FormContent/FormContent";
import ImageSources from "@/components/ImageSources";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export default function HomePage() {
  const [state, formAction] = useFormState(handleSubmit, null);
  console.log({state})

  async function handleSubmit(_state: null | Prediction, formData: FormData) {
    let prediction = await createPrediction(formData);

    while (["starting", "processing"].includes(prediction.status)) {
      prediction = await getPrediction(prediction.id);

      await sleep(4000);
    }

    return prediction;
  }

  return (
    <section className="m-auto grid items-center justify-center container max-w-[512px] gap-8">
      {state && (
        <ImageSources state={state}/>
      )}
      <form action={formAction} className="flex flex-col gap-4 min-w-[600px]">
        <FormContent />
      </form>
    </section>
  );
}
