import React from "react";
import LayoutPost from "../../../components/BlogScene/LayoutOfPost";
import ListWithLinks from "../../../components/BlogScene/components/ListWithLinks";

export default () => {
  const elements = [
    {
      name: "Biblia",
      link: "https://www.bible.com/es-ES"
    },
    {
      name: "No es por Vista",
      link: "https://www.amazon.com/No-por-vista-Solo-Spanish/dp/0829768718",
      author: "Cash Luna"
    },
    {
      name: "La tragedia de Macbeth",
      link: "#",
      author: "William Shakespeare"
    },
    {
      name: "Romeo y Julieta",
      link: "#",
      author: "William Shakespeare"
    },
    {
      name: "Harry Potter: Orden del Fénix",
      link:
        "https://www.amazon.com/Harry-Potter-Orden-edici%C3%B3n-blanda/dp/8498386659/ref=sr_1_6?keywords=Harry+Potter+Orden+Del+fenix&qid=1576531882&sr=8-6",
      author: "J. K. Rowling"
    },
    {
      name: "Harry Potter: El Misterio del Principe",
      link:
        "https://www.amazon.com/Harry-Potter-misterio-principe-Spanish/dp/8498386993/ref=sr_1_1?keywords=Harry+Potter+Misterio+del+Principe&qid=1576531958&sr=8-1",
      author: "J. K. Rowling"
    },
    {
      name: "La Patria del Criollo",
      link: "https://www.invisionapp.com/ecourses/principles-of-ux-design",
      author: "Severo Martínez Peláez"
    },
    {
      name: "Ready Player One.",
      link: "#",
      author: "Ernest Cline"
    },
    {
      name: "We Should All Be Feminist",
      link:
        "https://www.amazon.com/Todos-deber%C3%ADamos-ser-feministas-Spanish-ebook/dp/B010W34ZH8/ref=sr_1_5?keywords=We+Should+All+Be+Feminist&qid=1576532285&sr=8-5",
      author: "Chimanda Ngozi Adichie"
    },
    {
      name: "Dear Ijeawele, or a Feminist Manifesto in Fifteen Suggestions",
      link:
        "https://www.amazon.com/Ijeawele-Feminist-Manifesto-Fifteen-Suggestions-ebook/dp/B01MSXNNGX",
      author: "Chimanda Ngozi Adichie"
    },
    {
      name: "Principles of UX Design",
      link: "https://www.invisionapp.com/ecourses/principles-of-ux-design",
      author: "Invision Team"
    },
    {
      name: "Bulding Microservices",
      link: "https://www.invisionapp.com/ecourses/principles-of-ux-design",
      author: "Sam Newman"
    },
    {
      name: "Code Clean",
      link: "https://www.invisionapp.com/ecourses/principles-of-ux-design",
      author: "Robert C. Martin"
    }
  ];
  return (
    <LayoutPost
      headTitle={"Libros que leí este año."}
      title="Libros que leí este año 2019."
      date="2019-12-16"
      author="Luis Locon"
    >
      <p>
        Este año no tenía una meta contreta de cuantos libros quería leer, así
        que, entre libros extensos y lecturas rápidas, ví cosas interesantes y
        aprendí mucho de todo lo que tuve la oportunidad de leer, así que como
        ya he hecho unos años atrás, dejo la recopilación de los libros que leí,
        para compartir con todos ustedes, en que enfoque parte de mi tiempo este
        año.
      </p>
      <p>
        Este era un tiempo importante para obtener distintos puntos de vista,
        profesionales, y al mismo tiempo culturales, así que como se pude
        observar fueron temas demasiado distintos, pero en cada etapa ayudaron a
        entender mejor el contexto en el cual estaba desarrollando o educando en
        ese momento.
      </p>
      <ListWithLinks orderList elements={elements} />
      <br />
      <p>
        Siempre he encontrado en las lecturas, la forma mas fácil de expandir mi
        imaginación y lograr ser mas creativo, al mismo tiempo de poder entender
        mas sobre un tema, y formar un criterio sobre algo.
      </p>
      <p>
        La parte mas difícil de leer es saber que leer, así que me gustaría que
        me compartieran que leyeron, para agregar mas a mi lista de pendientes
        que es muy corta.
      </p>
      <p>
        Escríbeme un tuit en{" "}
        <a target="_blank" href="https://twitter.com/loconluis">
          @LoconLuis
        </a>{" "}
        usando #FRGMNTBooks y aprendamos juntos.
      </p>
    </LayoutPost>
  );
};
