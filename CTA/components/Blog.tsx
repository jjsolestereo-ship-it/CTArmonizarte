import React, { useState } from 'react';
import { Calendar, User, ArrowRight, BookOpen, X, Clock, Share2, CheckCircle2, AlertCircle } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  readTime?: string;
  content?: React.ReactNode;
}

const posts: BlogPost[] = [
  {
    id: 7,
    title: "¿Qué sabemos de la violencia intrafamiliar?",
    excerpt: "Un problema social grave que afecta a la integridad de la familia. Identifica las señales y conoce qué hacer ante la escalada de violencia.",
    date: "25 Mar, 2024",
    author: "Dr. Menthor Sanchez",
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Familia y Sociedad",
    readTime: "6 min",
    content: (
      <div className="space-y-8 text-stone-700 leading-relaxed text-lg">
        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 italic text-stone-700 text-lg font-serif">
          "La violencia intrafamiliar es un problema social grave que afecta a personas de todas las edades, géneros y niveles socioeconómicos, generando traumas emocionales profundos."
        </div>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-4 font-serif">Definición y Manifestaciones</h3>
          <p className="mb-4">
            Se define como cualquier acto de violencia física, emocional, sexual o económica que ocurre dentro del entorno familiar y que daña la integridad, dignidad o seguridad de sus miembros, alterando el comportamiento de la familia.
          </p>
          <p className="mb-4">
            La explosión de la violencia suele estar relacionada con la historia familiar, adicciones desde temprana edad, la situación social y económica, y el nivel de educación. Ante este estado, las víctimas suelen sentir vergüenza, culpa e imposibilidad de solicitar ayuda.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                  <strong className="block text-brand-800 mb-1">Física</strong>
                  <span className="text-sm">Golpes, lesiones, agresión directa a la integridad.</span>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                  <strong className="block text-brand-800 mb-1">Psicológica</strong>
                  <span className="text-sm">Amenazas, humillaciones, manipulación emocional.</span>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                  <strong className="block text-brand-800 mb-1">Económica</strong>
                  <span className="text-sm">Control del dinero, privación de recursos básicos.</span>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                  <strong className="block text-brand-800 mb-1">Sexual</strong>
                  <span className="text-sm">Abuso o coerción dentro de la relación.</span>
              </div>
          </div>
        </section>

        <section className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
          <h3 className="text-xl font-bold text-brand-800 mb-4 flex items-center gap-2">
            <User size={20} /> Síntesis de un Caso Real
          </h3>
          <p className="mb-4 italic text-stone-600">
            Pareja conviviendo más de 15 años, con dos hijos. Esposo de 35 años y esposa de 33.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-stone-600 mt-1">
              En esta relación ha sido muy frecuente la violencia física y psicológica, escalando hasta volverse una relación sado-masoquista por la violencia a la integridad física de parte de cada uno.
            </p>
            <p className="text-sm text-stone-600 mt-1">
              Se llegó al punto de <strong>normalizar los episodios de violencia</strong>, incluso frente a los niños. Todo intento de escucharse y solucionar problemas de comunicación o económicos terminaba casi siempre en enfrentamientos.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-6 font-serif">¿Qué Hacer?</h3>
          <p className="mb-6">Teniendo en cuenta que los brotes pueden escalar poco a poco, es crucial:</p>
          
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-500 mt-1 shrink-0" />
              <div>
                <strong className="block text-brand-800">Cortar a tiempo</strong>
                <span className="text-stone-600">Buscar mecanismos internos para resolver el conflicto antes de la escalada.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-500 mt-1 shrink-0" />
              <div>
                <strong className="block text-brand-800">Dialogar en calma</strong>
                <span className="text-stone-600">Intentar llegar a acuerdos frente a problemas y soluciones, reconociendo errores.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-500 mt-1 shrink-0" />
              <div>
                <strong className="block text-brand-800">Proteger a los hijos</strong>
                <span className="text-stone-600">No involucrarlos ni manipularlos. Generar relaciones de escucha, respeto y empatía con ellos.</span>
              </div>
            </li>
             <li className="flex gap-3 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-500 mt-1 shrink-0" />
              <div>
                <strong className="block text-brand-800">Buscar ayuda especializada</strong>
                <span className="text-stone-600">Si la violencia es permanente y sobrepasa la reparación, es necesario buscar apoyo legal, psicológico o en centros de atención especializados.</span>
              </div>
            </li>
          </ul>
          
          <div className="mt-8 bg-red-50 border border-red-100 p-4 rounded-xl flex items-start gap-3">
               <AlertCircle className="text-red-600 w-6 h-6 mt-1 shrink-0" />
               <div>
                   <p className="text-red-800 font-bold text-sm">¿Necesitas ayuda inmediata?</p>
                   <p className="text-red-700 text-xs mt-1">Si estás en peligro, llama al 911 o acude al centro de salud más cercano. No estás solo/a.</p>
               </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 6, 
    title: "¿Qué sabemos del estrés?",
    excerpt: "El estrés es una respuesta integral ante situaciones amenazantes. Conoce sus síntomas, causas y 10 estrategias prácticas de prevención.",
    date: "22 Mar, 2024",
    author: "Dr. Menthor Sanchez",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Salud Mental",
    readTime: "7 min",
    content: (
      <div className="space-y-8 text-stone-700 leading-relaxed text-lg">
        <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-600 italic text-stone-600 text-lg font-serif">
          "El estrés es una respuesta integral del sujeto ante situaciones percibidas como amenazantes o desafiantes. Generalmente se produce por acumulación de problemas que el sujeto no puede resolver por sí mismo."
        </div>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-4 font-serif">Causas y Definición</h3>
          <p className="mb-4">
            Esta respuesta puede ser adaptativa, ayudando a las personas a enfrentar desafíos y mejorar su rendimiento en momentos críticos. Sin embargo, cuando se vuelve crónico, genera alteraciones orgánico-funcionales como gastritis o neuralgias.
          </p>
          <p className="mb-4">
            Actualmente, la mayoría de desencadenantes son las limitaciones económicas, la sobreacumulación de actividades que incrementan la tensión, las relaciones interpersonales conflictivas o traumáticas, y los cambios radicales de adaptación o sobrecarga laboral.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
            <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
              <AlertCircle size={20} /> Síntomas Físicos
            </h4>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• Taquicardia</li>
              <li>• Sudoración excesiva</li>
              <li>• Temblores</li>
              <li>• Fatiga crónica</li>
              <li>• Problemas gastrointestinales</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
              <AlertCircle size={20} /> Síntomas Psicológicos
            </h4>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• Excesiva ansiedad</li>
              <li>• Irritabilidad</li>
              <li>• Dificultad para concentrarse</li>
              <li>• Cambios en el estado de ánimo</li>
              <li>• Insomnio</li>
            </ul>
          </div>
        </section>

        <section className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
          <h3 className="text-xl font-bold text-brand-800 mb-4 flex items-center gap-2">
            <User size={20} /> Síntesis de un Caso Real
          </h3>
          <p className="mb-4 italic text-stone-600">
            Una persona ingresa de urgencia al hospital a la sala de emergencias con un fuerte dolor estomacal, irritabilidad y trastornos del sueño.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-stone-600 mt-1">
              En consulta habla de que ha estado trabajando más horas de lo normal durante mucho tiempo y que ha tenido varias recaídas, especialmente con el dolor de estómago. No le han funcionado bien los tratamientos farmacológicos.
            </p>
            <p className="text-sm text-stone-600 mt-1">
              Luego empieza a comentar varios problemas que viene arrastrando, como desempleo, falta de ingresos y conflictos familiares. En detalle, <strong>todo se halla relacionado con su sintomatología.</strong>
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-6 font-serif">Estrategias de Prevención</h3>
          <p className="mb-6 text-stone-600">Para prevenir el estrés, recomendamos estas estrategias prácticas y saludables:</p>
          
          <ul className="space-y-4">
            {[
              { title: "Reconocer lo inmutable", text: "Aceptar hechos que no se pueden cambiar (pérdidas irreversibles, etc.) ayuda a dejar ir preocupaciones innecesarias." },
              { title: "Planificar y organizar", text: "Hacer listas de tareas, priorizar lo importante y ser realista con el tiempo reduce el agobio." },
              { title: "Aprender a decir 'no'", text: "Evitar sobrecargarse con compromisos. Tener una planificación mínima de nuestras prioridades." },
              { title: "Dieta saludable", text: "Verduras, frutas, granos integrales y proteínas magras. Evitar exceso de azúcar y cafeína." },
              { title: "Dormir lo suficiente", text: "Entre 7 y 9 horas para descansar bien, pensar con claridad y tener energía." },
              { title: "Actividad física regular", text: "El ejercicio relaja los músculos, mejora el ánimo y reduce la ansiedad." },
              { title: "Tiempo placentero", text: "Pasar tiempo con familia, amigos y hobbies es esencial para el equilibrio emocional." },
              { title: "Técnicas de relajación", text: "Respiración profunda, meditación, mindfulness, yoga o tai chi disminuyen la tensión." },
              { title: "Evitar malos hábitos", text: "Limitar alcohol, tabaco y drogas previene que el estrés se agrave." },
              { title: "Buscar apoyo profesional", text: "Si todo está agotado, es necesario consultar a un Psicólogo profesional, de preferencia de orientación analítica." }
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start p-3 hover:bg-stone-50 rounded-lg transition-colors">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mt-1 shrink-0" />
                <div>
                  <strong className="text-brand-800 block">{item.title}</strong>
                  <span className="text-stone-600 text-sm">{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  },
  {
    id: 5, 
    title: "¿Qué sabemos de los trastornos psicosomáticos?",
    excerpt: "Cuando la palabra calla, el cuerpo empieza a hablar a través del dolor. Entendiendo las afecciones físicas de origen emocional.",
    date: "18 Mar, 2024",
    author: "Dr. Menthor Sanchez",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Psicosomática",
    readTime: "6 min",
    content: (
      <div className="space-y-8 text-stone-700 leading-relaxed text-lg">
        <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-600 italic text-stone-600 text-center text-xl font-serif">
          “Cuando la palabra calla, el cuerpo empieza a hablar a través del dolor”
        </div>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-4 font-serif">¿Qué son los trastornos psicosomáticos?</h3>
          <p className="mb-4">
            Los trastornos psicosomáticos son afecciones físicas reales que tienen su origen, en parte o totalmente, en factores psicológicos. Es decir, el cuerpo manifiesta síntomas que no se explican completamente por causas médicas u orgánicas. Dolores persistentes, problemas dermatológicos, gastrointestinales o cardiovasculares pueden aparecer sin una causa médica clara.
          </p>
          <p className="mb-4">
            <strong>A diferencia de lo que se piensa comúnmente, estos trastornos no son "imaginarios" ni simulados. El sufrimiento es real.</strong> Lo que cambia es la causa: en lugar de ser provocados por un daño físico identificable, estos síntomas surgen como expresión de conflictos emocionales o psicológicos no resueltos.
          </p>
          <p>
             El cuerpo se convierte en el escenario de esos conflictos cuando no pueden ser "puestos en palabras". Esta idea central del psicoanálisis muestra cómo emociones reprimidas, traumas infantiles o pérdidas no elaboradas pueden manifestarse físicamente.
          </p>
        </section>

        <section className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
          <h3 className="text-xl font-bold text-brand-800 mb-4 flex items-center gap-2">
            <User size={20} /> Síntesis de un Caso Real
          </h3>
          <p className="mb-4 italic text-stone-600">
            Paciente de 55 años. Acude por dolores de cabeza recurrentes y episodios que él describe como "ataques" donde cree perder la conciencia, aunque no sucede realmente.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-brand-900 text-sm uppercase tracking-wide">Historia Clínica</h4>
              <p className="text-sm text-stone-600 mt-1">
                Refiere que no puede estar solo en ningún sitio porque el "ataque" viene de manera repentina. Ha visitado médicos generales, psiquiatras, chamanes, reflexólogos y adivinos durante más de 10 años sin resultados claros, creyendo incluso que le habían hecho algún daño.
              </p>
            </div>
            <div>
               <h4 className="font-bold text-brand-900 text-sm uppercase tracking-wide">Sintomatología</h4>
               <p className="text-sm text-stone-600 mt-1">
                 Mareos, sensación de perder la conciencia por segundos, temblor de manos, angustia y miedo intenso.
               </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-6 font-serif">Formas de Prevención y Abordaje</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">1</div>
              <div>
                <strong className="block text-brand-800 text-lg mb-1">Fomentar la expresión emocional</strong>
                <p className="text-stone-600">No callar. Hablar de lo que nos preocupa con personas de extrema confianza y expresar sentimientos como tristeza, rabia o miedo sin juzgarnos. Canalizar emociones a través del arte, escritura o deporte.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">2</div>
              <div>
                <strong className="block text-brand-800 text-lg mb-1">Conocerse a uno mismo</strong>
                <p className="text-stone-600">Reflexionar sobre nuestras vivencias, identificar patrones repetitivos en nuestras relaciones y estar atentos a cómo reaccionamos ante el estrés.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">3</div>
              <div>
                <strong className="block text-brand-800 text-lg mb-1">Buscar ayuda profesional a tiempo</strong>
                <p className="text-stone-600">Si los síntomas físicos persisten sin causa médica, iniciar un proceso psicoterapéutico. No esperar a "estar muy mal". La medicación sola a menudo no resuelve la raíz del conflicto.</p>
              </div>
            </li>
             <li className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">4</div>
              <div>
                <strong className="block text-brand-800 text-lg mb-1">Construir vínculos sanos</strong>
                <p className="text-stone-600">Fortalecer la comunicación con familia y amigos. Evitar relaciones que invaliden lo que sentimos y aprender a poner límites.</p>
              </div>
            </li>
             <li className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">5</div>
              <div>
                <strong className="block text-brand-800 text-lg mb-1">Escuchar al cuerpo con respeto</strong>
                <p className="text-stone-600">El cuerpo no miente. Si algo duele, merece atención. No automedicarse sin buscar comprender el origen emocional del malestar.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    )
  },
  {
    id: 4, 
    title: "¿Por qué llegamos a deprimirnos?",
    excerpt: "Desde la perspectiva psicoanalítica, la depresión es una manifestación compleja de conflictos internos. El Dr. Menthor Sánchez explora sus causas y abordaje.",
    date: "14 Mar, 2024",
    author: "Dr. Menthor Sanchez G.",
    image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Psicoanálisis",
    readTime: "5 min",
    content: (
      <div className="space-y-8 text-stone-700 leading-relaxed text-lg">
        <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-600 italic text-stone-600">
          "Desde la perspectiva psicoanalítica, la depresión no se entiende únicamente como un trastorno con causas biológicas o químicas, sino como una manifestación compleja de conflictos internos..."
        </div>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-4 font-serif">La Raíz del Conflicto</h3>
          <p className="mb-4">
            Muchas veces inconscientes, estos conflictos se relacionan con experiencias tempranas, pérdidas y dificultades en las relaciones interpersonales. Freud y algunos autores clásicos destacaron que la depresión puede surgir como respuesta a la pérdida de un ser amado (real o simbólica), como pueden ser los padres, hermanos o parientes cercanos.
          </p>
          <p>
            Esto desencadena sentimientos de dolor, culpa y autocrítica excesiva. El psicoanálisis considera que la depresión puede ser una forma de adaptación ante situaciones de pérdida o frustración, donde los sentimientos de hostilidad o rabia hacia el objeto perdido se vuelven hacia uno mismo, generando autorreproche y baja autoestima.
          </p>
        </section>

        <section className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
          <h3 className="text-xl font-bold text-brand-800 mb-4 flex items-center gap-2">
            <User size={20} /> Síntesis de un Caso Real
          </h3>
          <p className="mb-4 italic text-stone-600">
            Un joven de 26 años llega a consulta, con gafas obscuras, se sienta un poco ansioso, empieza a hablar y al propio tiempo empieza a llorar por varios minutos...
          </p>
          <p className="mb-4">
            Lleva unos meses con una nueva pareja casada, dice que ya no le ve en días y semanas, que le va a perder. Asegura que es su pareja y cree que algo le pasó, pero no se ha comunicado con él. Está seguro de que ella lo ama, pero el silencio persiste.
          </p>
          <p className="font-medium text-brand-900">
            Síntomas observados:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 marker:text-brand-500">
            <li>Insomnio y tristeza profunda.</li>
            <li>Timidez y falta de concentración en el trabajo.</li>
            <li>Cuadro de ansiedad muy marcado.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-4 font-serif">Causas Relacionadas</h3>
          <p className="mb-4">Por este y muchos casos más, podemos inferir que las causas de la depresión se hallan relacionadas con:</p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold text-xs">1</span>
              <div>
                <strong className="block text-brand-800">Conflictos emocionales no resueltos</strong>
                <span className="text-stone-600">Especialmente aquellos relacionados con la infancia y las primeras relaciones afectivas.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold text-xs">2</span>
              <div>
                <strong className="block text-brand-800">Pérdidas significativas</strong>
                <span className="text-stone-600">No solo la muerte, sino también la pérdida de ideales, roles o situaciones que eran fuente de seguridad.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold text-xs">3</span>
              <div>
                <strong className="block text-brand-800">Ambivalencia afectiva</strong>
                <span className="text-stone-600">Sentimientos simultáneos de amor y hostilidad que, al no poder expresarse, se vuelcan hacia uno mismo.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold text-xs">4</span>
              <div>
                <strong className="block text-brand-800">Déficit en el poder de la palabra</strong>
                <span className="text-stone-600">La incapacidad de poner en palabras el malestar íntimo contribuye a la cronificación.</span>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-4 font-serif">Formas de Abordaje</h3>
          <p className="mb-4">
            El tratamiento psicoanalítico busca identificar y resolver los conflictos internos en la raíz del sufrimiento mediante:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
              <strong className="text-brand-700 block mb-1">Enfoque Individualizado</strong>
              <p className="text-sm text-stone-600">Escucha atenta para comprender la singularidad (emociones, deseos, fantasías).</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
              <strong className="text-brand-700 block mb-1">Exploración del Pasado</strong>
              <p className="text-sm text-stone-600">Análisis de vivencias infantiles para entender el origen de los patrones.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
              <strong className="text-brand-700 block mb-1">Trabajo con Emociones</strong>
              <p className="text-sm text-stone-600">Procesar culpa, rabia o tristeza reprimida que conviven como dolor guardado.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
              <strong className="text-brand-700 block mb-1">Vínculo Terapéutico</strong>
              <p className="text-sm text-stone-600">Ofrecer un espacio seguro para expresar y trabajar emociones difíciles.</p>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 3,
    title: "Alimentación y emociones",
    excerpt: "Existe una conexión directa entre tu intestino y tu cerebro. Aprende qué alimentos favorecen la producción de serotonina.",
    date: "01 Mar, 2024",
    author: "Equipo Armonizarte",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Nutrición",
    readTime: "6 min",
    content: (
      <div className="space-y-6 text-stone-700 leading-relaxed text-lg">
        <p className="mb-4">
          A menudo escuchamos "somos lo que comemos", pero la ciencia moderna ha confirmado una conexión mucho más profunda: el eje intestino-cerebro. Sorprendentemente, cerca del <strong>90% de la serotonina</strong> (el neurotransmisor de la felicidad) se produce en el tracto gastrointestinal.
        </p>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-4 font-serif">Nutrientes para el Bienestar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="border border-stone-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-green-700 mb-2">Triptófano</h4>
                <p className="text-sm text-stone-600">Precursor de la serotonina. Se encuentra en pavo, huevos, queso, piña, aguacate y frutos secos.</p>
             </div>
             <div className="border border-stone-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-blue-700 mb-2">Omega-3</h4>
                <p className="text-sm text-stone-600">Fundamental para la salud cerebral y cognitiva. Presente en pescados grasos (salmón, atún), nueces y semillas de lino.</p>
             </div>
             <div className="border border-stone-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-purple-700 mb-2">Probióticos</h4>
                <p className="text-sm text-stone-600">Mantienen la flora intestinal saludable. Yogur natural, kéfir, chucrut y otros fermentados.</p>
             </div>
             <div className="border border-stone-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-orange-700 mb-2">Magnesio</h4>
                <p className="text-sm text-stone-600">Ayuda a relajar el sistema nervioso. Chocolate negro (70%+), espinacas, plátanos y legumbres.</p>
             </div>
          </div>
        </section>

        <section>
           <h3 className="text-xl font-bold text-brand-900 mb-2 font-serif">La trampa del azúcar</h3>
           <p>
             El consumo excesivo de azúcares refinados provoca picos y caídas bruscas de glucosa en sangre, lo que se traduce en irritabilidad, ansiedad y fatiga mental. Optar por carbohidratos complejos (avena, granos enteros) proporciona una energía más estable y duradera para tu cerebro.
           </p>
        </section>
      </div>
    )
  },
  {
    id: 2,
    title: "Identificando el Burnout a tiempo",
    excerpt: "Señales físicas y emocionales que indican que necesitas hacer una pausa antes de que el estrés crónico te afecte.",
    date: "08 Mar, 2024",
    author: "Dr. Menthor Sanchez",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Salud Laboral",
    readTime: "4 min",
    content: (
      <div className="space-y-6 text-stone-700 leading-relaxed text-lg">
        <p className="mb-4">
          El síndrome de Burnout o "trabajador quemado" no es simplemente cansancio; es un estado de agotamiento físico, emocional y mental causado por estrés excesivo y prolongado. Ocurre cuando te sientes abrumado, emocionalmente agotado e incapaz de cumplir con las demandas constantes.
        </p>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-4 font-serif">Las 3 Dimensiones del Burnout</h3>
          <div className="space-y-4">
             <div className="bg-stone-50 p-4 rounded-lg">
                <strong className="text-orange-700 block mb-1">1. Agotamiento Emocional</strong>
                <span className="text-stone-600 text-sm">Sensación de no poder dar más de sí mismo. Fatiga que no mejora con el descanso habitual.</span>
             </div>
             <div className="bg-stone-50 p-4 rounded-lg">
                <strong className="text-orange-700 block mb-1">2. Despersonalización (Cinismo)</strong>
                <span className="text-stone-600 text-sm">Actitud distante, negativa o insensible hacia el trabajo y las personas con las que se interactúa. "Ya no me importa".</span>
             </div>
             <div className="bg-stone-50 p-4 rounded-lg">
                <strong className="text-orange-700 block mb-1">3. Baja Realización Personal</strong>
                <span className="text-stone-600 text-sm">Sentimientos de ineficacia, falta de logros y baja productividad. Creer que nada de lo que haces tiene valor.</span>
             </div>
          </div>
        </section>

        <div className="flex gap-4 items-start bg-red-50 p-4 rounded-xl border border-red-100">
           <AlertCircle className="text-red-500 w-6 h-6 mt-1 shrink-0" />
           <div>
             <h4 className="font-bold text-red-800 text-sm">¿Qué hacer?</h4>
             <p className="text-sm text-red-700 mt-1">Si identificas estos síntomas, es crucial detenerse. Hablar con un supervisor, buscar apoyo terapéutico y reevaluar tus prioridades no es una debilidad, es necesario para recuperar tu salud.</p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "La importancia del autocuidado diario",
    excerpt: "Pequeñas acciones cotidianas que transforman tu salud mental a largo plazo. Descubre cómo establecer límites saludables.",
    date: "12 Mar, 2024",
    author: "Dra. Gladys Montero",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bienestar",
    readTime: "3 min",
    content: (
      <div className="space-y-8 text-stone-700 leading-relaxed text-lg">
        <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500 italic text-stone-600 font-serif text-xl text-center">
          "El autocuidado no es un lujo ni un acto de egoísmo; es una disciplina de preservación indispensable para poder cuidar de otros."
        </div>

        <section>
          <h3 className="text-2xl font-bold text-brand-900 mb-4 font-serif">Redefiniendo el Autocuidado</h3>
          <p className="mb-4">
            A menudo, la industria del bienestar nos vende el autocuidado como baños de burbujas, chocolates caros o escapadas de fin de semana. Si bien estas cosas son placenteras, el <strong>autocuidado real</strong> es algo mucho menos glamoroso y mucho más fundamental.
          </p>
          <p className="mb-4">
            Se trata de tomar decisiones cotidianas que construyan una vida de la que no necesites "escapar". Es el acto de maternarse/paternarse a uno mismo: asegurarse de comer alimentos nutritivos, dormir las horas necesarias y no sobreexponerse a situaciones dañinas.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h4 className="font-bold text-brand-800 mb-3 flex items-center gap-2">
                 <div className="p-1 bg-brand-100 rounded-lg"><Clock size={16}/></div>
                 Higiene del Sueño
              </h4>
              <p className="text-sm text-stone-600">
                Dormir menos de 7 horas afecta tu corteza prefrontal, reduciendo tu capacidad de regular emociones. Priorizar tu descanso es la decisión de salud mental más eficiente que puedes tomar.
              </p>
           </div>
           <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h4 className="font-bold text-brand-800 mb-3 flex items-center gap-2">
                 <div className="p-1 bg-red-100 text-red-600 rounded-lg"><X size={16}/></div>
                 Poner Límites
              </h4>
              <p className="text-sm text-stone-600">
                Aprender a decir "no" a compromisos que drenan tu energía. Un límite no es un ataque al otro, es un acto de respeto hacia tu propia capacidad y tiempo.
              </p>
           </div>
           <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h4 className="font-bold text-brand-800 mb-3 flex items-center gap-2">
                 <div className="p-1 bg-green-100 text-green-600 rounded-lg"><CheckCircle2 size={16}/></div>
                 Movimiento Consciente
              </h4>
              <p className="text-sm text-stone-600">
                Mover el cuerpo no para "quemar calorías" o castigarte por comer, sino para liberar tensión acumulada (cortisol) y generar endorfinas. Caminar 20 minutos es suficiente.
              </p>
           </div>
           <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h4 className="font-bold text-brand-800 mb-3 flex items-center gap-2">
                 <div className="p-1 bg-orange-100 text-orange-600 rounded-lg"><AlertCircle size={16}/></div>
                 Dieta Digital
              </h4>
              <p className="text-sm text-stone-600">
                Tu cerebro no está diseñado para procesar el sufrimiento de todo el mundo en tiempo real. Limita el consumo de noticias y redes sociales al despertar y antes de dormir.
              </p>
           </div>
        </section>

        <section className="bg-brand-900 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 font-serif flex items-center gap-2">
             <BookOpen size={20} className="text-brand-300"/>
             Ejercicio Práctico: El Check-in Diario
          </h3>
          <p className="mb-6 text-brand-100">
            Tres veces al día, detente y pregúntate:
          </p>
          <ul className="space-y-4">
             <li className="flex items-start gap-3">
                <span className="font-bold text-brand-300 text-xl">1.</span>
                <div>
                   <strong className="block text-white">¿Cómo está mi nivel de energía?</strong>
                   <span className="text-sm text-brand-200">(Del 1 al 10)</span>
                </div>
             </li>
             <li className="flex items-start gap-3">
                <span className="font-bold text-brand-300 text-xl">2.</span>
                <div>
                   <strong className="block text-white">¿Qué necesito ahora mismo?</strong>
                   <span className="text-sm text-brand-200">(¿Agua? ¿Silencio? ¿Movimiento? ¿Hablar con alguien?)</span>
                </div>
             </li>
             <li className="flex items-start gap-3">
                <span className="font-bold text-brand-300 text-xl">3.</span>
                <div>
                   <strong className="block text-white">¿Qué puedo soltar?</strong>
                   <span className="text-sm text-brand-200">(¿Tensión en la mandíbula? ¿Una preocupación futura?)</span>
                </div>
             </li>
          </ul>
        </section>

        <p className="text-stone-600 italic text-sm text-center pt-4 border-t border-stone-100">
           "Cuidarte a ti mismo es la mejor manera de asegurarte de que puedes seguir estando ahí para los demás."
        </p>
      </div>
    )
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm flex items-center gap-2 mb-2">
              <BookOpen size={16} /> Recursos Gratuitos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Blog de Bienestar y Salud Mental
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Artículos escritos por profesionales para acompañarte en tu día a día.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-700 font-bold hover:text-brand-900 transition-colors group">
            Ver todos los artículos <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-white rounded-2xl border border-stone-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-800 uppercase tracking-wide shadow-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-stone-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  {post.readTime && (
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-brand-700 transition-colors font-serif leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                      <User size={12} />
                    </div>
                    <span className="text-xs font-medium text-stone-500">{post.author}</span>
                  </div>
                  <span className="text-brand-600 font-semibold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Leer más <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-brand-700 font-bold hover:text-brand-900 transition-colors border border-brand-200 px-6 py-3 rounded-lg">
            Ver todos los artículos <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Article Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[70] bg-stone-900/40 backdrop-blur-sm flex justify-center overflow-y-auto animate-in fade-in duration-300" onClick={() => setSelectedPost(null)}>
          <div 
            className="bg-white w-full max-w-3xl my-4 md:my-10 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative animate-in slide-in-from-bottom-8 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white backdrop-blur-md p-2 rounded-full text-stone-500 hover:text-stone-900 transition-colors shadow-sm"
            >
              <X size={24} />
            </button>

            {/* Hero Image */}
            <div className="h-64 sm:h-80 w-full relative shrink-0">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full">
                <span className="bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                  {selectedPost.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight mb-2">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-stone-200">
                  <span className="flex items-center gap-1"><User size={14} /> {selectedPost.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {selectedPost.date}</span>
                  {selectedPost.readTime && <span className="flex items-center gap-1"><Clock size={14} /> {selectedPost.readTime} de lectura</span>}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
              {selectedPost.content ? (
                selectedPost.content
              ) : (
                // Fallback for posts without full content
                <div className="text-stone-600 space-y-4">
                  <p className="text-lg leading-relaxed font-serif text-stone-800">
                    {selectedPost.excerpt}
                  </p>
                  <p>
                    El contenido completo de este artículo está disponible exclusivamente en nuestra revista impresa o para miembros suscritos. 
                  </p>
                  <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex flex-col items-center text-center mt-8">
                    <BookOpen className="text-brand-400 mb-2" size={32} />
                    <h4 className="font-bold text-stone-800">¿Quieres saber más?</h4>
                    <p className="text-sm text-stone-500 mb-4">Suscríbete a nuestros planes para acceder a guías completas.</p>
                    <a href="#planes" onClick={() => setSelectedPost(null)} className="text-brand-600 font-bold hover:underline">Ver Planes de Membresía</a>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="bg-stone-50 p-4 border-t border-stone-100 flex justify-between items-center shrink-0">
               <button className="text-stone-500 hover:text-brand-600 flex items-center gap-2 text-sm font-medium transition-colors">
                 <Share2 size={16} /> Compartir
               </button>
               <button 
                onClick={() => setSelectedPost(null)}
                className="bg-brand-700 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-brand-800 transition-colors"
               >
                 Cerrar Artículo
               </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;