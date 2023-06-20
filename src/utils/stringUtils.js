export function updateGreeting(setGreeting) {
  const currentHour = new Date().getHours()

  let displayGreeting

  if (currentHour > 6 && currentHour < 12) {
    displayGreeting = 'Good morning'
  } else if (currentHour < 17) {
    displayGreeting = 'Good afternoon'
  } else {
    displayGreeting = 'Good evening'
  }

  setGreeting(displayGreeting)
}
