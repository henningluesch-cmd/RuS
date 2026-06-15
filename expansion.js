const pairedTheory=[
['Mathematische Modelle und Systemklassen',
`<p>Ein dynamisches System mit finitem Zustand wird formal durch</p>\\[\\dot x=f(x,u,t),\\qquad y=h(x,u,t)\\]<p>beschrieben. Es heißt linear, wenn \(f\) und \(h\) lineare Abbildungen bezüglich Zustand und Eingang sind. Zeitinvarianz liegt vor, wenn eine Verschiebung des Eingangsverlaufs dieselbe Verschiebung der Ausgangsantwort bewirkt.</p>`,
`<p>\(f\) ist einfach eine Rechenvorschrift: Sie sagt, wie schnell sich jeder Zustand gerade verändert. \(h\) sagt, was davon am Sensor erscheint.</p><p>„Linear“ bedeutet: Verdoppelt man Ursache und Anfangswert, verdoppelt sich die Wirkung. „Zeitinvariant“ bedeutet: Der Versuch läuft heute genauso wie morgen.</p>`,
[['finit','endlich viele Zustände'],['explizit','höchste Ableitung ist freigestellt'],['kausal','keine Wirkung vor der Ursache']]],
['Zustand, Zustandsraum und Trajektorie',
`<p>Der Zustand \(x(t)\\in\\mathbb R^n\) ist eine minimale Informationsmenge, aus der zusammen mit \(u(\\tau)\), \(\tau\\ge t\), der zukünftige Verlauf eindeutig hervorgeht. Der Zustandsraum ist die Menge aller zulässigen Zustände; \(t\\mapsto x(t)\) heißt Trajektorie.</p>`,
`<p>Der Zustand ist ein vollständiger „Zwischenstand“ des Systems. Du musst nicht die ganze Vergangenheit kennen, wenn du den momentanen Zustand kennst. Eine Trajektorie ist die Spur, die dieser Zwischenstand im Zustandsraum zeichnet.</p>`,
[['\(\\mathbb R^n\)','Raum aus n reellen Komponenten'],['Trajektorie','Weg des Zustands'],['Anfangswert','Startpunkt der Trajektorie']]],
['Ruhelage und lokale Dynamik',
`<p>Für einen konstanten Eingang \(u_R\) heißt \(x_R\) Ruhelage, wenn \(f(x_R,u_R)=0\). Lokale Aussagen untersuchen die Dynamik für \(x=x_R+\\Delta x\) mit hinreichend kleinem \(\|\\Delta x\|\).</p>`,
`<p>In der Ruhelage bewegt sich das System nicht weiter, obwohl der Eingang durchaus ungleich null sein kann. „Lokal“ heißt: Die Aussage gilt nur in einer ausreichend kleinen Umgebung.</p>`,
[['Index R','Wert an der Ruhelage'],['\(\Delta x\)','Abweichung vom Arbeitspunkt'],['lokal','nur in der Nähe gültig']]],
['Jacobi-Matrix und partielle Ableitung',
`<p>Für \(f:\\mathbb R^n\\to\\mathbb R^m\) ist die Jacobi-Matrix \(J_f(x)=[\\partial f_i/\\partial x_j]\\in\\mathbb R^{m\\times n}\). Sie ist die beste lineare Approximation von \(f\) am betrachteten Punkt.</p>`,
`<p>Bei einer partiellen Ableitung veränderst du genau eine Variable und behandelst alle anderen kurz wie Konstanten. Jede Zeile gehört zu einer Gleichung, jede Spalte zu einer Variable.</p>`,
[['\(\partial\)','partielle Ableitung'],['\(J_{ij}\)','Zeile i, Spalte j'],['Approximation','Näherung']]],
['Eigenwerte, Eigenvektoren und Moden',
`<p>Ein Vektor \(v\\ne0\) heißt Eigenvektor von \(A\), wenn \(Av=\\lambda v\). Für die Mode \(x(0)=v\) gilt \(x(t)=e^{\\lambda t}v\). Das Spektrum \(\sigma(A)\) ist die Menge aller Eigenwerte.</p>`,
`<p>Ein Eigenvektor ist eine besondere Richtung, die A nicht dreht, sondern nur streckt, staucht oder umkehrt. Der Eigenwert sagt, wie schnell die Bewegung in dieser Richtung wächst, abklingt oder schwingt.</p>`,
[['Spektrum','Menge der Eigenwerte'],['Mode','elementarer Bewegungsanteil'],['\(\operatorname{Re}\)','Realteil']]],
['Algebraische und geometrische Vielfachheit',
`<p>Die algebraische Vielfachheit ist die Vielfachheit einer Nullstelle von \(p_A(\\lambda)\). Die geometrische Vielfachheit ist \(\dim\\ker(A-\\lambda I)\). Es gilt stets \(1\\le g_\\lambda\\le n_\\lambda\).</p>`,
`<p>Algebraisch zählt, wie oft der Eigenwert im Polynom vorkommt. Geometrisch zählt, wie viele unabhängige Eigenrichtungen tatsächlich vorhanden sind. Fehlen Richtungen, braucht man Jordan-Ketten.</p>`,
[['\(\dim\)','Dimension/Anzahl unabhängiger Richtungen'],['\(\ker\)','Nullraum'],['Jordan-Kette','Ersatz für fehlende Eigenvektoren']]],
['Matrixexponential und Transitionsmatrix',
`<p>Die Fundamentalmatrix eines LTI-Systems ist \(\Phi(t)=e^{At}=\\sum_{k=0}^{\\infty}A^kt^k/k!\). Sie erfüllt \(\dot\\Phi=A\\Phi\) und \(\Phi(0)=I\).</p>`,
`<p>Das Matrixexponential ist die Version von \(e^{at}\) für mehrere gekoppelte Zustände. Es transportiert jeden Anfangszustand vom Startzeitpunkt zum späteren Zeitpunkt.</p>`,
[['Fundamentalmatrix','Matrix aller freien Lösungen'],['\(I\)','Einheitsmatrix'],['Reihe','unendliche Summe']]],
['Steuerbarkeit und erreichbarer Unterraum',
`<p>Das Paar \((A,B)\) ist vollständig steuerbar, falls \(\operatorname{rang}\\mathcal R=n\), \(\mathcal R=[B,AB,\\dots,A^{n-1}B]\). Ist der Rang kleiner, bildet \(\operatorname{im}\\mathcal R\) den steuerbaren Unterraum.</p>`,
`<p>Die Spalten zeigen alle Richtungen, in die der Eingang direkt oder über die Dynamik wirken kann. Wenn diese Richtungen den ganzen Raum aufspannen, kann jeder Zustand beeinflusst werden.</p>`,
[['\(\operatorname{rang}\)','Anzahl unabhängiger Zeilen/Spalten'],['\(\operatorname{im}\)','Bild/erzeugter Raum'],['vollständig','alle Zustandsrichtungen']]],
['Beobachtbarkeit und nicht beobachtbarer Raum',
`<p>Das Paar \((C,A)\) ist vollständig beobachtbar, falls \(\operatorname{rang}\\mathcal O=n\), \(\mathcal O=[C^T,(CA)^T,\\dots]^T\). Der nicht beobachtbare Raum ist \(\ker\\mathcal O\).</p>`,
`<p>Der Sensor sieht zunächst \(Cx\). Durch die Bewegung des Systems tauchen später weitere Zustandsinformationen im Signal auf. Zustände im Nullraum der O-Matrix bleiben für den Sensor unsichtbar.</p>`,
[['Dualität','Beobachtbarkeit entspricht Steuerbarkeit des transponierten Systems'],['unsichtbar','erzeugt keine unterscheidbare Messung'],['Rekonstruktion','Zustand aus Messungen zurückgewinnen']]],
['Zustandsregler und Polvorgabe',
`<p>Mit \(u=-Kx+Vr\) entsteht \(A_{cl}=A-BK\). Bei vollständiger Steuerbarkeit können die Eigenwerte von \(A_{cl}\) im SISO-Fall mit Ackermann beliebig vorgegeben werden.</p>`,
`<p>Der Regler misst oder kennt den Zustand und reagiert mit einer passenden Gegenwirkung. Durch K bestimmst du, wie sich das geschlossene System bewegt. V sorgt dafür, dass ein Sollwert richtig getroffen wird.</p>`,
[['cl','closed loop/geschlossener Kreis'],['SISO','ein Eingang, ein Ausgang'],['Polvorgabe','gewünschte Eigenwerte festlegen']]],
['Luenberger-Beobachter und Innovation',
`<p>Der vollständige Beobachter lautet \(\dot{\\hat x}=A\\hat x+Bu+L(y-C\\hat x)\). Der Innovationsvektor \(y-\\hat y\) korrigiert die modellbasierte Vorhersage. Es gilt \(\dot e=(A-LC)e\).</p>`,
`<p>Der Beobachter lässt ein zweites Modell mitlaufen. Weicht dessen vorhergesagte Messung von der echten Messung ab, wird die Schätzung korrigiert. L legt fest, wie stark jede Zustandskomponente korrigiert wird.</p>`,
[['Dach \(\hat x\)','geschätzter Wert'],['Innovation','neue Messinformation'],['Fehlerdynamik','Verhalten des Schätzfehlers']]],
['Übertragungsfunktion und Frequenzgang',
`<p>Für \(x_0=0\) gilt \(G(s)=C(sI-A)^{-1}B+D\). Der Frequenzgang ist die Einschränkung \(G(i\\omega)\) auf die imaginäre Achse und beschreibt stationäre Antworten auf harmonische Eingänge.</p>`,
`<p>Die Übertragungsfunktion betrachtet nur, was vom Eingang am Ausgang ankommt. \(s\) ist eine komplexe Rechenvariable. Setzt man \(s=i\\omega\), erfährt man Verstärkung und Phasenverschiebung für Sinusschwingungen.</p>`,
[['\(s\)','komplexe Laplace-Variable'],['\(i\\omega\)','Punkt auf imaginärer Achse'],['stationär','nach Abklingen der Startbewegung']]]
];
pairedTheory.forEach((m,i)=>formalSimpleTheory.insertAdjacentHTML('beforeend',`<details class="theory-pair"><summary>${i+1}. ${m[0]}: formal und einfach erklärt</summary><div class="pair-body"><div class="pair-grid"><div class="formal-side"><h4>Formaler Skriptteil</h4>${m[1]}</div><div class="simple-side"><h4>Einfach gesagt</h4>${m[2]}</div></div><div class="word-list">${m[3].map(w=>`<div class="word-item"><b>${w[0]}</b>${w[1]}</div>`).join('')}</div></div></details>`));

notationLab.innerHTML=`<details class="theory-pair"><summary>Symbol- und Schreibweisen-Labor</summary><div class="pair-body"><p>Diese Tabelle übersetzt häufige mathematische Kurzschreibweisen. Sie ist besonders hilfreich, wenn eine Aufgabe zunächst komplizierter aussieht, als sie tatsächlich ist.</p><table class="notation-table"><tr><th>Schreibweise</th><th>Gesprochen</th><th>Bedeutung</th></tr>
<tr><td>\(x\\in\\mathbb R^n\)</td><td>x liegt in R hoch n</td><td>x ist ein Spaltenvektor mit n reellen Einträgen.</td></tr>
<tr><td>\(A\\in\\mathbb R^{n\\times n}\)</td><td>A ist n mal n</td><td>A besitzt n Zeilen und n Spalten.</td></tr>
<tr><td>\(A^T\)</td><td>A transponiert</td><td>Zeilen und Spalten werden vertauscht.</td></tr>
<tr><td>\(A^{-1}\)</td><td>A invers</td><td>Matrix, für die \(A^{-1}A=I\) gilt; existiert nur bei regulärem A.</td></tr>
<tr><td>\(\det A\\ne0\)</td><td>Determinante ungleich null</td><td>A ist invertierbar; ihre Spalten sind unabhängig.</td></tr>
<tr><td>\(\operatorname{rang}A=n\)</td><td>A hat vollen Rang</td><td>A spannt alle n benötigten Richtungen auf.</td></tr>
<tr><td>\(\forall i\)</td><td>für alle i</td><td>Die Aussage muss für jeden Index gelten.</td></tr>
<tr><td>\(\exists x\)</td><td>es existiert ein x</td><td>Mindestens ein passendes x ist vorhanden.</td></tr>
<tr><td>\(\left.\\frac{\\partial f}{\\partial x}\\right|_R\)</td><td>Ableitung am Arbeitspunkt</td><td>Erst ableiten, danach Werte des Arbeitspunktes einsetzen.</td></tr>
<tr><td>\(\operatorname{span}\\{v_1,v_2\}\)</td><td>Spann der Vektoren</td><td>Alle Linearkombinationen der genannten Vektoren.</td></tr>
<tr><td>\(\ker A\)</td><td>Kern von A</td><td>Alle x mit \(Ax=0\).</td></tr>
<tr><td>\(\operatorname{diag}(a,b)\)</td><td>Diagonalmatrix</td><td>Matrix mit a und b auf der Diagonale und sonst Nullen.</td></tr></table></div></details>`;

function num(id,v,label=id){return `<label>${label}<input id="tt-${id}" type="number" step="any" value="${v}"></label>`}
function tv(id){return +(document.getElementById('tt-'+id)?.value||0)}
function sf(x){return Math.abs(x)<1e-10?'0':(+x.toFixed(5)).toString()}
function step(letter,title,body){return `<div class="solution-step"><span>${letter}</span><div><h5>${title}</h5>${body}</div></div>`}
const trainerTypes=[
{id:'eig',group:'Tutorium 1',name:'Eigenwerte und Eigenvektoren 2×2',desc:'Charakteristisches Polynom, Eigenwerte und Eigenvektoren',inputs:()=>num('a',1,'a₁₁')+num('b',2,'a₁₂')+num('c',0,'a₂₁')+num('d',3,'a₂₂'),run:()=>{
 let a=tv('a'),b=tv('b'),c=tv('c'),d=tv('d'),tr=a+d,de=a*d-b*c,di=tr*tr-4*de;
 let roots=di>=0?[(tr+Math.sqrt(di))/2,(tr-Math.sqrt(di))/2]:null;
 return step('A','Charakteristisches Polynom',`\\[\\det(\\lambda I-A)=\\det\\begin{bmatrix}\\lambda-${a}&-${b}\\\\-${c}&\\lambda-${d}\\end{bmatrix}\\]`)
 +step('R','Determinante ausmultiplizieren',`\\[(\\lambda-${a})(\\lambda-${d})-(${b})(${c})=\\lambda^2-${sf(tr)}\\lambda+${sf(de)}\\]`)
 +step('R','Nullstellen berechnen',roots?`\\[\\lambda_1=${sf(roots[0])},\\qquad\\lambda_2=${sf(roots[1])}\\]`:`\\[\\lambda_{1,2}=${sf(tr/2)}\\pm ${sf(Math.sqrt(-di)/2)}i\\]`)
 +(roots?step('R','Eigenvektor-Rezept',`Für jedes \(\lambda_i\) löst du \\[(A-\\lambda_iI)v_i=0.\\] Eine mögliche Wahl bei \(b\\ne0\) ist \\[v_i=\\begin{bmatrix}b\\\\\\lambda_i-a\\end{bmatrix}.\\]`):'')
 +step('K','Kontrolle',`Prüfe jeden Vektor mit \(Av_i=\\lambda_i v_i\). Die Summe der Eigenwerte muss der Spur ${sf(tr)} und ihr Produkt der Determinante ${sf(de)} entsprechen.`)}},
{id:'lgs',group:'Tutorium 1',name:'Lineares Gleichungssystem 2×2',desc:'Lösung und Sonderfälle über Determinanten',inputs:()=>num('a',2,'a₁₁')+num('b',1,'a₁₂')+num('c',1,'a₂₁')+num('d',-1,'a₂₂')+num('r',5,'b₁')+num('s',1,'b₂'),run:()=>{
 let a=tv('a'),b=tv('b'),c=tv('c'),d=tv('d'),r=tv('r'),s=tv('s'),det=a*d-b*c;
 let out=step('A','Gleichung als Matrix',`\\[\\begin{bmatrix}${a}&${b}\\\\${c}&${d}\\end{bmatrix}\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}=\\begin{bmatrix}${r}\\\\${s}\\end{bmatrix}\\]`)
 +step('R','Invertierbarkeit prüfen',`\\[\\det A=(${a})(${d})-(${b})(${c})=${sf(det)}\\]`);
 if(det!==0){let x=(r*d-b*s)/det,y=(a*s-r*c)/det;out+=step('R','Cramersche Regel',`\\[x_1=\\frac{\\det\\begin{bmatrix}${r}&${b}\\\\${s}&${d}\\end{bmatrix}}{\\det A}=\\frac{${sf(r*d-b*s)}}{${sf(det)}}=${sf(x)}\\] \\[x_2=\\frac{\\det\\begin{bmatrix}${a}&${r}\\\\${c}&${s}\\end{bmatrix}}{\\det A}=\\frac{${sf(a*s-r*c)}}{${sf(det)}}=${sf(y)}\\]`)+step('K','Rückeinsetzen',`Prüfe: erste Zeile \( ${a}\\cdot${sf(x)}+${b}\\cdot${sf(y)}=${sf(a*x+b*y)}\), zweite Zeile \( ${c}\\cdot${sf(x)}+${d}\\cdot${sf(y)}=${sf(c*x+d*y)}\).`)}
 else out+=step('I','Singulärer Fall',`Da \(\det A=0\), gibt es keine eindeutige Lösung. Vergleiche die Zeilen der erweiterten Matrix \([A|b]\): Sind auch die rechten Seiten im selben Verhältnis, gibt es unendlich viele Lösungen, andernfalls keine.`);
 return out}},
{id:'complex',group:'Tutorium 1',name:'Komplexe Zahl in Polarform',desc:'Betrag und Phase einer komplexen Zahl',inputs:()=>num('x',-3,'Realteil x')+num('y',4,'Imaginärteil y'),run:()=>{
 let x=tv('x'),y=tv('y'),r=Math.hypot(x,y),ph=Math.atan2(y,x);
 return step('A','Kartesische Form',`\\[z=${x}+(${y})i\\]`)
 +step('R','Betrag',`\\[|z|=\\sqrt{x^2+y^2}=\\sqrt{(${x})^2+(${y})^2}=${sf(r)}\\]`)
 +step('R','Phase quadrantengerecht',`\\[\\varphi=\\operatorname{atan2}(${y},${x})=${sf(ph)}\\ \\text{rad}\\]`)
 +step('I','Eulerform',`\\[\\boxed{z=${sf(r)}e^{i\\,${sf(ph)}}}\\]`)
 +step('K','Kontrolle',`Prüfe \(x=|z|\\cos\\varphi\) und \(y=|z|\\sin\\varphi\).`) }},
{id:'dgl',group:'Tutorium 1/2',name:'Skalare DGL mit konstantem Eingang',desc:'Analytische Lösung von ẋ=λx+bu',inputs:()=>num('la',-2,'λ')+num('bb',3,'b')+num('u',2,'u')+num('x0',5,'x₀')+num('t',1,'t'),run:()=>{
 let l=tv('la'),b=tv('bb'),u=tv('u'),x0=tv('x0'),t=tv('t'),x=l===0?x0+b*u*t:Math.exp(l*t)*x0+b*u/l*(Math.exp(l*t)-1);
 return step('A','Variation der Konstanten',`\\[x(t)=e^{\\lambda t}x_0+\\int_0^t e^{\\lambda(t-\\tau)}bu\\,d\\tau\\]`)
 +step('R','Werte einsetzen',l===0?`Für \(\lambda=0\): \\[x(t)=x_0+but=${x0}+(${b})(${u})(${t})\\]`:`\\[x(t)=e^{${l}\\cdot${t}}${x0}+\\frac{(${b})(${u})}{${l}}(e^{${l}\\cdot${t}}-1)\\]`)
 +step('I','Ergebnis',`\\[\\boxed{x(${t})=${sf(x)}}\\]`)
 +step('K','Kontrolle',`Bei \(t=0\) muss \(x(0)=x_0\) entstehen. Für \(\lambda<0\) ist der stationäre Wert \(x_R=-bu/\\lambda\).`) }},
{id:'class',group:'Tutorium 2',name:'Systemklassifikation',desc:'Linearität und Zeitvarianz erkennen',inputs:()=>`<label>Systemform<select id="tt-kind"><option value="lti">Ax+Bu</option><option value="ltv">A(t)x+Bu</option><option value="nli">sin(x)+u</option><option value="nlt">t·x²+u</option></select></label>`,run:()=>{
 let k=document.getElementById('tt-kind').value,m={lti:['linear','zeitinvariant','Nur erste Potenzen und konstante Koeffizienten.'],ltv:['linear','zeitvariant','Linear in x und u, aber Koeffizient hängt von t ab.'],nli:['nichtlinear','zeitinvariant','sin(x) verletzt Superposition; kein explizites t.'],nlt:['nichtlinear','zeitvariant','x² verletzt Superposition und t erzeugt Zeitvarianz.']}[k];
 return step('A','Zwei getrennte Fragen',`1. Gilt Superposition? 2. Kommt die Zeit explizit vor?`)+step('R','Klassifikation',`Das gewählte System ist <b>${m[0]}</b> und <b>${m[1]}</b>. ${m[2]}`)+step('K','Prüfmethode',`Für Linearität teste \(f(\\alpha x_1+\\beta x_2)=\\alpha f(x_1)+\\beta f(x_2)\).`) }},
{id:'jacobi',group:'Tutorium 2',name:'Jacobi-Matrix auswerten',desc:'Partielle Ableitungen und Einsetzen',inputs:()=>num('al',2,'α')+num('x1',0.5,'x₁')+num('x2',1.5,'x₂'),run:()=>{
 let a=tv('al'),x=tv('x1'),y=tv('x2'),e=Math.exp(-a*x*y),j=[Math.cos(x)*y*y,2*y*Math.sin(x),-a*y*e,-a*x*e];
 return step('A','Funktion',`\\[f=\\begin{bmatrix}\\sin(x_1)x_2^2\\\\e^{-\\alpha x_1x_2}\\end{bmatrix}\\]`)
 +step('R','Nach jeder Variable ableiten',`\\[J_f=\\begin{bmatrix}\\cos(x_1)x_2^2&2x_2\\sin(x_1)\\\\-\\alpha x_2e^{-\\alpha x_1x_2}&-\\alpha x_1e^{-\\alpha x_1x_2}\\end{bmatrix}\\]`)
 +step('R','Punkt einsetzen',`\\[J_f(${x},${y})=\\begin{bmatrix}${sf(j[0])}&${sf(j[1])}\\\\${sf(j[2])}&${sf(j[3])}\\end{bmatrix}\\]`)
 +step('K','Anordnung',`Zeile i gehört zu \(f_i\), Spalte j zur Ableitung nach \(x_j\).`) }},
{id:'lin',group:'Tutorium 2',name:'Nichtlineares System linearisieren',desc:'Ruhelage und Ableitungen für a·sin(x)+bu',inputs:()=>num('aa',2,'a')+num('bb2',3,'b')+num('xr',0,'x_R') ,run:()=>{
 let a=tv('aa'),b=tv('bb2'),x=tv('xr'),ur=-a*Math.sin(x)/b,A=a*Math.cos(x);
 return step('A','Ruhelage erzwingen',`\\[0=a\\sin(x_R)+bu_R\\Rightarrow u_R=-\\frac{a\\sin(x_R)}{b}\\]`)
 +step('R','Werte einsetzen',`\\[u_R=-\\frac{${a}\\sin(${x})}{${b}}=${sf(ur)}\\]`)
 +step('R','Jacobi-Ableitungen',`\\[A=\\left.a\\cos x\\right|_{x_R}=${sf(A)},\\qquad B=b=${b}\\]`)
 +step('I','Lineares Abweichungsmodell',`\\[\\boxed{\\Delta\\dot x=${sf(A)}\\Delta x+${b}\\Delta u}\\]`)
 +step('K','Lokalität',`Die Näherung ist besonders gut für kleine \(\Delta x\) um \(x_R=${x}\).`) }},
{id:'multi',group:'Tutorium 3',name:'Vielfachheit und Diagonalisierbarkeit',desc:'2×2-Matrix mit wiederholtem Eigenwert',inputs:()=>num('la2',2,'λ')+num('q',1,'Nebendiagonale q'),run:()=>{
 let l=tv('la2'),q=tv('q');
 return step('A','Matrix betrachten',`\\[A=\\begin{bmatrix}${l}&${q}\\\\0&${l}\\end{bmatrix}\\]`)
 +step('R','Algebraische Vielfachheit',`\\[p(\\mu)=(\\mu-${l})^2\\Rightarrow n_{${l}}=2\\]`)
 +step('R','Geometrische Vielfachheit',q===0?`Da \(A-${l}I=0\), ist der Kern zweidimensional: \(g=2\).`:`\\[A-${l}I=\\begin{bmatrix}0&${q}\\\\0&0\\end{bmatrix}\\Rightarrow v_2=0\\] Der Eigenraum hat nur eine freie Richtung: \(g=1\).`)
 +step('I','Entscheidung',q===0?`\(g=n=2\): diagonalisierbar.`:`\(g=1<n=2\): nicht diagonalisierbar; Jordanblock.`) }},
{id:'trans',group:'Tutorium 3',name:'Transitionsmatrix einer Diagonalmatrix',desc:'Matrixexponential und Zeitlösung',inputs:()=>num('l1',-1,'λ₁')+num('l2',-3,'λ₂')+num('x01',2,'x₁(0)')+num('x02',-1,'x₂(0)')+num('tt',1,'t'),run:()=>{
 let l1=tv('l1'),l2=tv('l2'),x1=tv('x01'),x2=tv('x02'),t=tv('tt');
 return step('A','Diagonalstruktur nutzen',`\\[A=\\begin{bmatrix}${l1}&0\\\\0&${l2}\\end{bmatrix}\\Rightarrow e^{At}=\\begin{bmatrix}e^{${l1}t}&0\\\\0&e^{${l2}t}\\end{bmatrix}\\]`)
 +step('R','Zustand berechnen',`\\[x(t)=e^{At}x_0=\\begin{bmatrix}e^{${l1}\\cdot${t}}&0\\\\0&e^{${l2}\\cdot${t}}\\end{bmatrix}\\begin{bmatrix}${x1}\\\\${x2}\\end{bmatrix}=\\begin{bmatrix}${sf(Math.exp(l1*t)*x1)}\\\\${sf(Math.exp(l2*t)*x2)}\\end{bmatrix}\\]`)
 +step('K','Kontrolle',`Bei \(t=0\) ist \(e^{A0}=I\) und damit \(x(0)=x_0\).`) }},
{id:'stab',group:'Tutorium 3',name:'Stabilität einer 2×2-Matrix',desc:'Eigenwerte und Realteile aus verstellbarer Matrix',inputs:()=>num('sa',0,'a₁₁')+num('sb',1,'a₁₂')+num('sc',-2,'a₂₁')+num('sd',-3,'a₂₂'),run:()=>{
 let a=tv('sa'),b=tv('sb'),c=tv('sc'),d=tv('sd'),tr=a+d,de=a*d-b*c,di=tr*tr-4*de,stable=tr<0&&de>0;
 return step('A','2×2-Hurwitz-Bedingung',`Für ein reelles System zweiter Ordnung gilt asymptotische Stabilität genau dann, wenn \(\operatorname{spur}A<0\) und \(\det A>0\).`)
 +step('R','Kennzahlen',`\\[\\operatorname{spur}A=${sf(tr)},\\qquad\\det A=${sf(de)},\\qquad\\Delta=${sf(di)}\\]`)
 +step('I','Aussage',`Das System ist <b>${stable?'asymptotisch stabil':'nicht asymptotisch stabil'}</b>.`)
 +step('K','Warum?',`Das charakteristische Polynom ist \(\lambda^2-${sf(tr)}\lambda+${sf(de)}\).`) }},
{id:'reg',group:'Tutorium 4',name:'Zustandsregler 2×2 in Normalform',desc:'Koeffizientenvergleich und Polvorgabe',inputs:()=>num('a0',2,'a₀')+num('a1',3,'a₁')+num('p1',-4,'Pol p₁')+num('p2',-5,'Pol p₂'),run:()=>{
 let a0=tv('a0'),a1=tv('a1'),p1=tv('p1'),p2=tv('p2'),k1=p1*p2-a0,k2=-(p1+p2)-a1;
 return step('A','System und Rückführung',`\\[A=\\begin{bmatrix}0&1\\\\-${a0}&-${a1}\\end{bmatrix},\\quad b=\\begin{bmatrix}0\\\\1\\end{bmatrix},\\quad k^T=\\begin{bmatrix}k_1&k_2\\end{bmatrix}\\]`)
 +step('R','Äußeres Produkt berechnen',`<div class="multiply-demo"><div class="factor">\\(b=\\begin{bmatrix}0\\\\1\\end{bmatrix}\\)</div><b>mal</b><div class="factor">\\(k^T=\\begin{bmatrix}k_1&k_2\\end{bmatrix}\\)</div></div>\\[bk^T=\\begin{bmatrix}0\\cdot k_1&0\\cdot k_2\\\\1\\cdot k_1&1\\cdot k_2\\end{bmatrix}=\\begin{bmatrix}0&0\\\\k_1&k_2\\end{bmatrix}\\]`)
 +step('R','Polynome vergleichen',`\\[p^*(\\lambda)=(\\lambda-${p1})(\\lambda-${p2})=\\lambda^2-${sf(p1+p2)}\\lambda+${sf(p1*p2)}\\] \\[p_{cl}(\\lambda)=\\lambda^2+(a_1+k_2)\\lambda+(a_0+k_1)\\]`)
 +step('I','Reglerverstärkung',`\\[\\boxed{k^T=\\begin{bmatrix}${sf(k1)}&${sf(k2)}\\end{bmatrix}}\\]`)
 +step('K','Kontrolle',`Setze K in \(A-bk^T\) ein und berechne dessen Eigenwerte. Sie müssen ${p1} und ${p2} sein.`) }},
{id:'obs',group:'Tutorium 4',name:'Zustandsbeobachter 2×2',desc:'Koeffizientenvergleich für A-lC',inputs:()=>num('oa',0,'a')+num('ob',1,'b≠0')+num('oc',-2,'c')+num('od',-3,'d')+num('op1',-6,'Pol p₁')+num('op2',-7,'Pol p₂'),run:()=>{
 let a=tv('oa'),b=tv('ob'),c=tv('oc'),d=tv('od'),p1=tv('op1'),p2=tv('op2');if(b===0)return `<div class="trainer-error">Für diesen Trainer muss b≠0 gelten, damit das verwendete System mit C=[1,0] beobachtbar sein kann.</div>`;
 let l1=a+d-(p1+p2),l2=(p1*p2-(a-l1)*d+b*c)/b;
 return step('A','Beobachterstruktur',`\\[A=\\begin{bmatrix}${a}&${b}\\\\${c}&${d}\\end{bmatrix},\\quad C=\\begin{bmatrix}1&0\\end{bmatrix},\\quad l=\\begin{bmatrix}l_1\\\\l_2\\end{bmatrix}\\]`)
 +step('R','Äußeres Produkt lC',`\\[lC=\\begin{bmatrix}l_1\\\\l_2\\end{bmatrix}\\begin{bmatrix}1&0\\end{bmatrix}=\\begin{bmatrix}l_1&0\\\\l_2&0\\end{bmatrix}\\] \\[A-lC=\\begin{bmatrix}${a}-l_1&${b}\\\\${c}-l_2&${d}\\end{bmatrix}\\]`)
 +step('R','Spur und Determinante vorgeben',`Gewünschte Spur: \(p_1+p_2=${sf(p1+p2)}\). Gewünschte Determinante: \(p_1p_2=${sf(p1*p2)}\).`)
 +step('I','Beobachterverstärkung',`\\[\\boxed{l=\\begin{bmatrix}${sf(l1)}\\\\${sf(l2)}\\end{bmatrix}}\\]`)
 +step('K','Kontrolle',`Berechne die Eigenwerte von \(A-lC\). Sie müssen ${p1} und ${p2} ergeben.`) }}
];
const sample=`<details class="sample-solution"><summary>Vollständiges Musterbeispiel: Wie multipliziert man Matrizen?</summary>
${step('A','Grundregel',`Beim Produkt \(M=NQ\) entsteht der Eintrag \(m_{ij}\), indem du <b>Zeile i</b> von N mit <b>Spalte j</b> von Q paarweise multiplizierst und anschließend addierst.`)}
${step('R','Matrix mal Vektor',`<div class="multiply-demo"><div class="factor">\\(A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}\\)</div><b>mal</b><div class="factor">\\(b=\\begin{bmatrix}5\\\\6\\end{bmatrix}\\)</div></div>
\\[Ab=\\begin{bmatrix}1\\cdot5+2\\cdot6\\\\3\\cdot5+4\\cdot6\\end{bmatrix}=\\begin{bmatrix}17\\\\39\\end{bmatrix}\\]
<p>Die erste Ergebniszeile verwendet nur die erste Zeile von A. Die zweite Ergebniszeile verwendet nur die zweite Zeile von A.</p>`)}
${step('R','Matrix mal Matrix',`\\[A^2=A\\cdot A=\\begin{bmatrix}1\\cdot1+2\\cdot3&1\\cdot2+2\\cdot4\\\\3\\cdot1+4\\cdot3&3\\cdot2+4\\cdot4\\end{bmatrix}=\\begin{bmatrix}7&10\\\\15&22\\end{bmatrix}\\]`)}
${step('K','Dimensionsregel',`Eine Matrix \(N\\in\\mathbb R^{r\\times s}\) darf mit \(Q\\in\\mathbb R^{s\\times t}\) multipliziert werden. Die inneren Dimensionen s müssen gleich sein; das Ergebnis besitzt Dimension \(r\\times t\).`)}
</details>`;
function renderTutorialTrainer(){
 tutorialTrainer.innerHTML=`<div class="trainer-shell"><select id="trainerType" class="trainer-select">${trainerTypes.map(t=>`<option value="${t.id}">${t.group} · ${t.name}</option>`).join('')}</select><div id="trainerMeta"></div><div id="dynamicInputs" class="dynamic-inputs"></div><button id="runTutorialTrainer" class="btn">Aufgabe vollständig berechnen</button><div id="trainerOutput" class="trainer-output"></div>${sample}</div>`;
 const select=document.getElementById('trainerType'),draw=()=>{let t=trainerTypes.find(x=>x.id===select.value);trainerMeta.innerHTML=`<div class="trainer-meta"><span>${t.group}</span><span>${t.desc}</span></div>`;dynamicInputs.innerHTML=t.inputs();trainerOutput.innerHTML='<p>Verändere die Werte und starte die vollständige Rechnung.</p>';if(window.MathJax?.typesetPromise)MathJax.typesetPromise([tutorialTrainer])};select.onchange=draw;runTutorialTrainer.onclick=()=>{let t=trainerTypes.find(x=>x.id===select.value);trainerOutput.innerHTML=t.run();if(window.MathJax?.typesetPromise)MathJax.typesetPromise([trainerOutput])};draw()
}
renderTutorialTrainer();
if(window.MathJax?.typesetPromise)MathJax.typesetPromise([formalSimpleTheory,notationLab,tutorialTrainer]);
