export function formatDate(isoString: string) {
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "")       // remove comma
    .replace("AM", "am")    // lowercase am
    .replace("PM", "pm");   // lowercase pm
  }
  
  console.log(formatDate("2025-08-27T18:27:46.962Z"));
  // "Aug 27 2025 6:27pm"
  