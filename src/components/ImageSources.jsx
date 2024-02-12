
import React from 'react'

export default function ImageSources({state}) {
	return (
		<section className="w-full">
			<img className="object-contain w-full" alt="Previsualización del render" src={state?.input?.image} />
			<img className="object-contain w-full" alt="Previsualización del render" src={state?.output[1]} /> 
		</section>
	)
}
