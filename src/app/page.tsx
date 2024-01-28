"use client";

import type {Prediction} from "@/types";

import {useFormState} from "react-dom";


import {createPrediction, getPrediction} from "@/actions";
import FormContent from "@/components/FormContent/FormContent";


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));



export default function HomePage() {
  const [state, formAction] = useFormState(handleSubmit, null);

  async function handleSubmit(_state: null | Prediction, formData: FormData) {
    let prediction = await createPrediction(formData);

    while (["starting", "processing"].includes(prediction.status)) {
      prediction = await getPrediction(prediction.id);

      await sleep(4000);
    }

    console.log(prediction)

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
