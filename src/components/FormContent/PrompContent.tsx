import React from "react";
import {Textarea} from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function PrompContent() {
	return (
		<>
			<section className="grid w-full gap-1.5">
        <Label htmlFor="message">Prompt for photo</Label>
        <Textarea name="prompt" placeholder="An industrial bedroom" />
        <p className="text-sm text-muted-foreground">
          Prompt for photo
        </p>
      </section>
      <section className="grid w-full gap-1.5">
        <Label htmlFor="message">Prompt accept</Label>
        <Textarea name="a_prompt" placeholder="best quality, extremely detailed, 4k, octane render, sharp, bloom, daylight" />
        <p className="text-sm text-muted-foreground">
        Prompt accept for photo
        </p>
      </section>
      <section className="grid w-full gap-1.5">
        <Label htmlFor="message">Prompt negative</Label>
        <Textarea name="n_prompt" placeholder="longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, blurry" />
        <p className="text-sm text-muted-foreground">
          Prompt negative for photo
        </p>
			</section>
		</>
	)
}
