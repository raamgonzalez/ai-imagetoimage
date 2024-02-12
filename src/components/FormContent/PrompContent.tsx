import React from "react";
import {Textarea} from "@/components/ui/textarea";


export default function PrompContent() {
	return (
		<>
    
      <section className="grid w-full">
        <Textarea name="prompt" placeholder="An industrial bedroom" />
        <p className="text-sm text-muted-foreground">
          Prompt for image
        </p>
      </section>

      <section className="grid w-full">
        <Textarea name="a_prompt" placeholder="best quality, extremely detailed, 4k, octane render, sharp, bloom, daylight" />
        <p className="text-sm text-muted-foreground">
          Prompt accept for image
        </p>
      </section>

      <section className="grid w-full ">
        <Textarea name="n_prompt" placeholder="longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, blurry" />
        <p className="text-sm text-muted-foreground">
          Prompt negative for image
        </p>
			</section>

		</>
	)
}
