'use client'

import * as React from 'react'
import * as checkbox from '@zag-js/checkbox'
import { useMachine, normalizeProps } from '@zag-js/react'
import { Check } from 'lucide-react'

export function Checkbox({ children }: { children: React.ReactNode }) {
	const id = React.useId()
	const [state, send] = useMachine(checkbox.machine({ id }))

	const api = checkbox.connect(state, send, normalizeProps)

	return (
		<label {...api.rootProps} className="inline-flex items-center gap-3">
			<div
				{...api.controlProps}
				className="inline-flex h-[1em] w-[1em] items-center justify-center rounded border border-neutral-400 ring-neutral-200/50 transition duration-300 data-[checked]:border-primary-500 data-[checked]:bg-primary-500 data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-primary-500 data-[hover]:ring-4 dark:ring-neutral-500/50 dark:data-[checked]:border-primary-400 dark:data-[checked]:bg-primary-400 dark:data-[focus]:outline-primary-400"
			>
				{api.isChecked ? (
					<Check className="h-[.8em] w-[.8em] text-white dark:text-black" />
				) : null}
			</div>
			<span {...api.labelProps}>{children}</span>
			<input {...api.inputProps} />
		</label>
	)
}
