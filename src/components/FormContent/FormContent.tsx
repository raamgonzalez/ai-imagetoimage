
import {Skeleton} from "@/components/ui/skeleton";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { Loader2 } from "lucide-react"

import { useFormStatus } from "react-dom";
import PrompContent from "./PrompContent";

export default function FormContent() {

	const {pending} = useFormStatus();

  return (
    <>
      {pending ? <section className="w-full flex flex-col gap-4">
        <Skeleton className="h-[256px] w-full" />
        <Skeleton className="h-[256px] w-full" />
      </section> : null}
      <section className="grid w-full items-center gap-1.5">
        <Input
          id="picture"
          accept="image/*"
          defaultValue="https://replicate.delivery/pbxt/IJZOELWrncBcjdE1s5Ko8ou35ZOxjNxDqMf0BhoRUAtv76u4/room.png"
          name="image"
          placeholder="https://replicate.delivery/pbxt/IJZOELWrncBcjdE1s5Ko8ou35ZOxjNxDqMf0BhoRUAtv76u4/room.png"
          type="file"
        />
        <p className="text-sm text-muted-foreground">
          Take our upload a photo of your room.
        </p>
      </section>
      <PrompContent/>
      {pending ?  
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button> 
      : <Button>
        Create image
      </Button>}
    </>
	)
}
