<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="classes"
		class="justify-center rounded-full font-semibold antialiased leading-none border"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	props: {
		class: {
			type: String,
			default:
				'w-full text-xl py-4 text-white border-white hover:border-lilac-400 focus:border-green-500',
		},
		text: {
			type: String,
			default: '',
		},
	},
}
</script>
