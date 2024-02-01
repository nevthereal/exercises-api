<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	let result = data;
</script>

<main class="w-screen h-screen flex">
	<div class="w-[50%] m-auto">
		<h1 class="h1 mb-4">Search Exercises</h1>
		<form method="POST" class="flex gap-2">
			<input type="text" class="input" name="query" />
			<select name="field" class="select">
				<option value="name">Name</option>
				<option value="type">Type</option>
				<option value="muscle">Muscle</option>
			</select>
			<button class="btn variant-ghost-primary">Search</button>
		</form>
	</div>
</main>
