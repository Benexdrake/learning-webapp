import styles from "@/styles/Home.module.css";


export default function Home() {

const json = JSON.stringify({
  "thema": "",
  "questions": [
      {
          "id":"1",
          "question": "",
          "answer": [
              "",
              "",
              "",
              ""
          ],
          "check": [false,false,false,false]
      }
  ]
}, undefined,2)



  return (
    <div className="block">
      <h2>Willkommen</h2>
      <p>Diese Seite dient dem lernen von Fragebögen zu spezifischen Themen</p>
      <p>Im Moment findet man hier Fragebögen zu den Themen:</p>
      <div>
      <ul>
        <li><a href="/fragebogen?id=1">Rechtliche Kompetenz</a></li>
        <li><a href="/fragebogen?id=2">Betriebs-/ Finanzwirtschaftliche Kompetenz</a></li>
      </ul>

      <p>Um neue Fragebögen hinzuzufügen, wird eine .json Datei im speziellen Format benötigt</p>

      <a href="../Fragebogen.json" target="_blank">
        <pre><p>{json}</p></pre>
        </a>
        <p>
          Unter thema der Names das Themas vom Fragebogen, wie z.B. Rechtliche Kompetenz
        </p>
        <p>
          id ist die Nr der Frage.
        </p>
        <p>
          answer sind die Antworten, es müssen nicht immer 4 sein.
        </p>
        <p>
          check dient der Überprüfung der Fragen, true und false erklärt sich von selbst.
        </p>
        <br />
        <p>Sollten mehr Fragebögen hinzugefügt werden, wird eine Dropdownlist in der Navbar hinzugefügt, statt einzelner Tabs</p>
      </div>
    </div>
  );
}
