import { useEffect } from "react";
import { Gradient } from "./assets/gradient";

export default () => {
	useEffect(() => {
		const gradient = new Gradient();
		gradient.initGradient("#gradient-canvas");
	}, []);
	return (
		<main className="min-h-screen flex flex-col relative bg-slate-900">
			<div className="relative z-10 flex flex-col flex-1 justify-center max-w-6xl p-10">
				<h1 className="text-7xl font-bold text-white">
					Woah, look at this whatamesh gradient.
				</h1>
			</div>
			<canvas
				id="gradient-canvas"
				className="fixed inset-0"
				data-transition-in
			/>
		</main>
	);
};
