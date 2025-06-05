<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    hide?: boolean;
    children: Snippet;
  }

  let { hide = $bindable(false), children }: Props = $props();

  const toggleHide = () => {
    hide = !hide;
    console.debug("Toggle hide state:", hide);
  };
</script>

<div
  role="button"
  tabindex="0"
  onclick={(e) => {
    toggleHide();
    e.stopPropagation();
  }}
  onkeypress={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleHide();
      e.stopPropagation();
    }
  }}
  class="cursor-pointer"
  class:cursor-copy={hide}
  class:hide
>
  {@render children()}
</div>

<style>
  .hide {
    @media print {
      display: none;
    }

    color: gray;
  }
</style>
