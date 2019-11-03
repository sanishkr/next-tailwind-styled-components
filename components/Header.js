export default () => {
	return (
		<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
			<div class="flex items-center flex-shrink-0 text-white mr-6">
				<span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
			</div>
			<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div class="text-sm lg:flex-grow">
					<a
						href="#responsive-header"
						class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
					>
						Page1
					</a>
					<a
						href="#responsive-header"
						class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
					>
						Page2
					</a>
				</div>
				<div>
					<a
						href="#"
						class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
					>
						EN / AR
					</a>
				</div>
			</div>
		</nav>
	);
};
