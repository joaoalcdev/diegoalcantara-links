import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen background">
      <Head>
        {/* bundle fonts ↓ */}
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap"
          rel="stylesheet"
        ></link>
        {/* bundle icons ↓ */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
        {/* url/title contents */}
        <title>Diego Alcântara | Links</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favico/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        {/* top url color mobile ↓ */}
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#141318"
        ></meta>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#141318"
        ></meta>
        <meta name="theme-color" content="#141318"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#141318"
        ></meta>
        <meta name="msapplication-navbutton-color" content="#141318"></meta>
        {/* favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicon.ico"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        ></link>
        <link rel="manifest" href="site.webmanifest"></link>
      </Head>

      {/* MAIN SECTION */}
      <header class="header"></header>
      <div class="profile-card">
        <div class="profile-card__info">
          <a
            href="https://www.instagram.com/diegoalcantara.md/"
            target="_blank"
          >
            <img
              draggable="false"
              class="profile-card__avatar"
              src="diegoprofile.jpeg"
              alt="Diego Alcântara Profile"
            />
          </a>
        </div>
      </div>
      <body cz-shortcut-listen="true">
        <main class="wrapper">
          <h1 class="hero-heading">
            <span class="highlight">Olá</span>,
            <span class="heading-highlight"> sou Diego</span>
          </h1>
          <paragraph>
            Estudante de<span className="highlight"> Medicina</span>{' '}
            <span>pela</span> <span className="highlight">(</span>UFRR
            <span className="highlight">)</span>.
            <br />
            <span class="highlight"></span> Te ajudo a conseguir
            <span class="highlight"> 900+ </span>{' '}
            <span class="heading-highlight">
              {' '}
              na redação <br /> do ENEM
            </span>
          </paragraph>
          {/* social media */}
          <ul class="link-grid">
            {/* social card 1 */}
            <li class="card-social">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </li>
            {/* social card 2 */}
            <li class="card-social">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/"
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </li>
            {/* social card 3 */}
            <li class="card-social">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </a>
            </li>
            {/* social card 4 */}
            <li class="card-social">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-3.288-4.888l-.424-1.48 1.024.952.968.896 1.72 1.52v-14.352c0-.912-.736-1.648-1.64-1.648h-10.72c-.904 0-1.64.736-1.64 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072zm-1.44-3.664c1.768-.056 2.448-1.216 2.448-1.216 0-2.576-1.152-4.664-1.152-4.664-1.152-.864-2.248-.84-2.248-.84l-.112.128c1.36.416 1.992 1.016 1.992 1.016-.832-.456-1.648-.68-2.408-.768-.576-.064-1.128-.048-1.616.016l-.136.016c-.28.024-.96.128-1.816.504l-.472.232s.664-.632 2.104-1.048l-.08-.096s-1.096-.024-2.248.84c0 0-1.152 2.088-1.152 4.664 0 0 .672 1.16 2.44 1.216l.536-.664c-1.016-.304-1.4-.944-1.4-.944l.224.136.032.024.032.018.009.004.031.018c.2.112.4.2.584.272.328.128.72.256 1.176.344.6.112 1.304.152 2.072.008.376-.064.76-.176 1.16-.344.28-.104.592-.256.92-.472 0 0-.4.656-1.448.952l.528.648zm-3.72-3.736c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* assets background */}
          <svg
            width="24"
            height="24"
            class="object__img01"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35 35"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M10.999 4.442v-.71c-.598-.346-1-.992-1-1.732 0-1.104.896-2 2-2s2 .896 2 2c0 .74-.402 1.386-1 1.732v.71c.144-.023.268-.053.36-.089 1.206-.459 1.872-2.286 3.948-2.353 2.21-.029 3.418 2.251 5.173 2.769.473.139 1.027.142 1.52.172-.635 4.108-6.593 5.872-11.001 4.725v6.923c.843.262 1.911.611 2.542 1.201 2.008 1.877.83 4.698-1.539 4.787v-1c1.266-.627 1.504-1.961-1.003-2.878v4.301c0 .553-.448 1-1 1s-1-.447-1-1v-4.896c-1.955-.51-5.364-1.17-5.339-4.003.018-1.696 1.55-3.101 3.331-3.101h.01c.553 0 1 .448 1 1 0 .549-.442.994-.989 1-.836.009-1.392.651-1.349 1.192.098 1.124 2.22 1.556 3.336 1.844v-6.369c-4.407 1.146-10.364-.619-10.999-4.726.493-.03 1.047-.033 1.52-.172 1.755-.518 2.963-2.798 5.173-2.769 2.076.067 2.742 1.894 3.948 2.353.092.036.215.065.358.089zm-3.039 13.923c.863.25 1.655.463 2.35.624-1.691.869-1.495 2.002-.311 2.588v1c-2.138-.08-3.305-2.384-2.039-4.212zm6.073-2.606c.889-.257 2.232-.644 2.305-1.567.043-.543-.516-1.183-1.35-1.192-.547-.006-.989-.451-.989-1 0-.552.448-1 1-1h.011c1.772 0 3.313 1.399 3.33 3.101.017 1.273-.851 2.367-1.986 2.934-.6-.505-1.397-.909-2.321-1.276zm5.773-8.647c.512-.24.961-.534 1.308-.886-1.406-.386-2.573-2.218-3.767-2.227-1.241.04-2.034 2.353-4.347 2.461v1.193c.605.22 1.527.336 2.551.323-.124-.484-.177-1.003-.186-1.605.413.611.955 1.129 1.523 1.516.478-.057.958-.142 1.422-.257-.394-.587-.6-1.203-.729-1.879.645.66 1.413 1.068 2.225 1.361zm-8.807-.652c-2.312-.108-3.106-2.421-4.346-2.461-1.194.009-2.361 1.841-3.767 2.227.347.352.796.646 1.308.886.812-.293 1.58-.701 2.225-1.361-.129.676-.335 1.292-.729 1.879.464.115.944.2 1.422.257.568-.387 1.11-.905 1.523-1.516-.009.602-.062 1.121-.186 1.605 1.023.013 1.945-.103 2.55-.322v-1.194z" />
          </svg>

          <svg
            width="24"
            height="24"
            class="object__img02"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35 35"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z" />
          </svg>

          <svg
            width="24"
            height="24"
            class="object__img03"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35 35"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M22 6c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h5v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h5zm0 2.5c0-.276-.224-.5-.5-.5h-19c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h19c.276 0 .5-.224.5-.5v-11zm-9 4.5h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3zm1.5-9h-5c-.276 0-.5.224-.5.5v1.5h6v-1.5c0-.276-.224-.5-.5-.5" />
          </svg>

          <div>
            {/* <div class="object__dotted04"></div> */}
            <div class="object__dotted03"></div>
            <div class="object__dotted02"></div>
            <div class="object__dotted01"></div>
          </div>
          {/* assets background */}

          {/* video section card */}
          <h2 class="heading heading-highlight">Conteúdos</h2>
          <article class="card resource">
            <div class="resource__container">
              {/* <iframe
                class="card"
                width="400"
                height="315"
                src="https://www.youtube.com/embed/18GtWdY4qq8"
                title="YouTube Video Player"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowfullscreen="allow"
              ></iframe> */}
              <video
                width="400"
                height="315"
                class="card"
                poster="calendarbg.jpg"
                controls
                played
              >
                <source src="lastvideo.mp4" type="video/mp4"></source>
                <source src="lastvideo.mp4" type="video/ogg"></source>
              </video>

              <img
                class="resource__icon__video"
                src="youtubelogo.png"
                alt=">Logo última Aula"
                draggable="false"
              ></img>
              <h3 class="sub-heading resource__title resource__text__video">
                Confira <br /> a última aula
              </h3>
              <p>
                Neste vídeo te mostro como conseguir seu primeiro 900+ na
                redaçao do ENEM
                <span class="highlight">.</span>
              </p>
              <p class="resource__button">
                <a
                  class="button"
                  href="https://www.youtube.com/watch?v=18GtWdY4qq8&ab_channel=ItaloMarsili"
                  target="_blank"
                >
                  Acessar Plataforma
                </a>
              </p>
            </div>
          </article>

          {/* normal card */}
          <h2 class="heading heading-highlight">Downloads</h2>
          <article class="card resource">
            <img
              class="resource__img"
              src="calendarbg.jpg"
              alt="Imagem da última aula"
              draggable="false"
            ></img>
            <div class="resource__container">
              <img
                class="resource__icon"
                src="calendar.png"
                alt=">Logo última"
                draggable="false"
              ></img>
              <h3 class="sub-heading resource__title resource__text">
                Cronograma
              </h3>
              <p>
                Meu cronograma de estudo e rotina que, me ajudou a
                passar para medicina
                <span class="highlight">.</span>
              </p>
              <p class="resource__button">
                {/* substituir disabled por button e adicionar "href" = "download" */}
                <a class="disabled" download="calendar.png">
                  Baixar Arquivo
                </a>
              </p>
            </div>
          </article>

          {/* <h2 class="heading heading-highlight">Downloads</h2>
          <article class="card resource">
            <img
              class="resource__img"
              src="figma.png"
              alt="Background figma wallpaper"
              draggable="false"
            ></img>
            <div class="resource__container">
              <h3 class="sub-heading resource__title">
                <img
                  class="resource__icon"
                  src="figma-icon.png"
                  alt="Figma logo"
                  draggable="false"
                ></img>
                Figma
              </h3>
              <p>
                Com este modelo você consegue criar posts para suas redes
                sociais. Nele há 2 modelos de carrosséis e 1 story
                <span class="highlight">.</span>
              </p>
              <p class="resource__button">
                <a class="button" href="#">
                  Obter Conteúdo
                </a>
              </p>
            </div>
          </article> */}

          {/* <h2 class="heading heading-highlight">Lorem</h2>
          <article class="card resource">
            <img
              class="resource__img"
              src="figma.png"
              alt="Background figma wallpaper"
            ></img>
            <div class="resource__container">
              <h3 class="sub-heading resource__title">
                <img
                  class="resource__icon"
                  src="figma-icon.png"
                  alt="Figma logo"
                ></img>
                Lorem
              </h3>
              <p>
                Est quis ipsum laboris consequat. Eu ea Lorem est non amet.
                Voluptate voluptate laboris adipisicing ullamco sit. Magna Lorem
                <span class="highlight">.</span>
              </p>
              <p class="resource__button">
                <a class="button" href="" target="_blank">
                  Lorem Button
                </a>
              </p>
            </div>
          </article> */}
        </main>
      </body>

      <footer class="footer">
        Copyright © 2021 Diego Alcântara | Criado por
        <a
          className="text-footer font-bold"
          href="https://www.instagram.com/joaoalcantara.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> João Alcântara</span>.
        </a>
      </footer>
    </div>
  )
}
