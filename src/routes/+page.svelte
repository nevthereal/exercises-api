<script lang="ts">
	import type { ActionData } from './$types';

	export let data: ActionData;

	let result = data?.result;
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
			{#if $result}
				{#each $result as res}
					<h1 class="h1">{res.name}</h1>
					<p>{res.muscle}</p>
				{/each}
			{/if}
		</form>
	</div>
</main>
