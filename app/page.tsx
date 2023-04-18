import { Inter } from 'next/font/google'
import { Checkbox } from '~/components/zag-js/checkbox'
import { Switch } from '~/components/zag-js/switch'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main
			className="flex min-h-screen flex-col items-center p-24"
			style={inter.style}
		>
			<Checkbox>This is a checkbox</Checkbox>
			<Switch>This is a switch</Switch>
		</main>
	)
}
