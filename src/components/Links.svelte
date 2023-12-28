<script>
  import ClockBorderIcon from "./icons/ClockBorderIcon.svelte";
  import KeyBorderIcon from "./icons/KeyBorderIcon.svelte";
  import LocationBorderIcon from "./icons/LocationBorderIcon.svelte";
  import MailBorderIcon from "./icons/MailBorderIcon.svelte";

  let date = getArgentinaDateTime();

  function getArgentinaDateTime() {
    try {
      const date = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        weekday: "short",
      });
      return `${date} (UTC-3)`;
    } catch (error) {
      return "Error getting date.";
    }
  }

  setInterval(() => {
    date = getArgentinaDateTime();
  }, 1000);
</script>

<ul class="text-sm text-gray-100">
  <li class="flex items-center">
    <LocationBorderIcon />
    <span class="ml-2">Santa Fe, Argentina</span>
  </li>
  <li class="mt-1 flex items-center">
    <ClockBorderIcon />
    <a
      id="date-time-element"
      href="https://time.is/UTC-3"
      target="_blank"
      class="ml-2 normal-case hover:text-blue-400 hover:underline">{date}</a
    >
  </li>
  <li class="mt-1 flex items-center">
    <MailBorderIcon />
    <a
      href="mailto:dev@puntogris.com"
      target="_blank"
      class="ml-2 hover:text-blue-400 hover:underline">dev@puntogris.com</a
    >
  </li>
  <li class="mt-1 flex items-center">
    <KeyBorderIcon />
    <a
      href="https://github.com/puntogris.gpg"
      target="_blank"
      class="ml-2 hover:text-blue-400 hover:underline">9AFF B800 6EE1 0C0A</a
    >
  </li>
</ul>
