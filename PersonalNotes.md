### Personal Notes v2.0

En general: _Mantenete simple y enfocate en el producto. No hay tiempo de perfeccionamientos innecesarios. Siempre podés volver en el futuro a mejorar un poco._

- _Desarrolla Ágilmente_. Tranquilo con la estructura, la legibilidad y la eficiencia. No es necesario que sea perfecto desde el inicio; **nadie te está juzgando**. Lo más importante es que funcione y después volvés a perfeccionarlo. No trabajes las cosas de forma fina desde el principio.

- _Prioridades y Necesidades_: Si tenés una idea _no_ podés simplemente implementarla al instante que se te ocurre solamente porque te parece buena. _Fijate qué tan necesaria es para la versión que estás haciendo y luego priorizala._ ¡No te atrases mil horas afinando cosas estúpidamente en una versión que no es para afinar!

- _Herramientas Innecesarias_: Muchas herramientas no sirven; podrían estar hechas manualmente cada vez que se necesitan y permiten una personalización mucho mejor. No tires tu tiempo haciendo herramientas que no son absolutamente necesarias y _MENOS si alguien externo ya las hizo_!

### Specific Notes (en inglés porque si)

- **On-need and Simplified Redux**:

  - _Don't code the actions before needing them!_, it's useless.
  - Always use the fundamental actions (`replace` or `merge`) for once-only or fundamental-set GS updates.
  - Otherwise, if a more-than-once process is needed, add a new action.

- **Customizable Tools, not Prestyled**:

  - Make tools with simple default styles and allow them be easily customizable rather than taking too much effort in building more-annoying-than-useful extensive default styles.
  - Instead of those useless extensive default styles that can be changed with prop-passed custom styles, it's more useful to declare props that configure the functionality or structure of the elements, which can't be changed with the prop-passed custom styles.

- **Positively rethink `useIndicatedStyles`**: 
  
  - Always apply `useIndicatedStyles` in the smallest possible components, even if this means creating a bunch of apparently-innecessary smaller components.
  - This small framework is useful for every conditional style as long as it's efficiency-aware applicated, even for something as small as one single condition and directive. Don't feel like it's overused.
  - It's not that important but keep in mind that simultaneously-rendering too many components with `customDirSty` (now widely renamed as `strightStyles`) considerably affects efficiency. 
