// ScrollReveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `header .main_header,
  .qualidade .qualidade-item,
  footer h2, .container_form
  `,
  { interval: 100 }
)