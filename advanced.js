const deepModules=[
['Vom realen Prozess zum mathematischen Modell',`
<p class="why"><b>Warum dieses Thema wichtig ist:</b> Fast jeder spätere Rechenfehler beginnt bereits bei einem unklaren Modell. Ein gutes Modell trennt Systemgrenze, Speicher, Flüsse, Eingänge und Messungen.</p>
<h3>1. Systemgrenze und Bilanzdenken</h3><p>Lege zuerst fest, was zum System gehört. Alles, was die Grenze überschreitet, ist ein Fluss oder Eingang. Zustände entstehen meist aus <b>Speichern</b>: Masse, Energie, Impuls oder Ladung.</p>
<div class="derivation"><b>Allgemeines Bilanzprinzip</b>\\[\\frac{d}{dt}(\\text{gespeicherte Größe})=\\text{Zufluss}-\\text{Abfluss}+\\text{Quelle}-\\text{Senke}\\]</div>
<h3>2. Beispiel Tank</h3><p>Bei konstantem Querschnitt \(S\) ist das Volumen \(V=Sh\). Mit Zufluss \(q_{in}\) und Abfluss \(q_{out}=k\\sqrt h\):</p>
<div class="matrix-display">\\[\\frac{dV}{dt}=q_{in}-q_{out}\\quad\\Rightarrow\\quad S\\dot h=q_{in}-k\\sqrt h\\quad\\Rightarrow\\quad\\dot h=\\frac{q_{in}-k\\sqrt h}{S}\\]</div>
<p>Der Zustand ist \(h\), weil er gespeichertes Volumen repräsentiert. Der Eingang ist \(q_{in}\). Das Modell ist wegen \(\sqrt h\) nichtlinear.</p>
<div class="checklist"><b>Modellierungscheck</b><ul><li>Stimmen Einheiten auf beiden Seiten?</li><li>Ist für jeden Speicher ein Zustand vorhanden?</li><li>Sind Stell- und Störgrößen getrennt?</li><li>Ist klar, welche Größe tatsächlich gemessen wird?</li></ul></div>`],
['Zustandswahl, Ordnung und Minimalität',`
<p class="why">Zustände sind keine beliebige Liste messbarer Größen. Sie müssen genau genug Information tragen, um aus \(x(t_0)\) und dem zukünftigen Eingang die Zukunft eindeutig zu bestimmen.</p>
<h3>Ordnung einer Differentialgleichung</h3><p>Bei \(y^{(n)}+a_{n-1}y^{(n-1)}+\\dots+a_0y=bu\) werden typischerweise \(x_1=y,x_2=\\dot y,\\dots,x_n=y^{(n-1)}\) gewählt.</p>
<div class="derivation"><b>Kettenstruktur</b>\\[\\dot x_1=x_2,\\quad \\dot x_2=x_3,\\quad\\dots,\\quad\\dot x_n=-a_0x_1-\\dots-a_{n-1}x_n+bu\\]</div>
<p>Warum nicht \(x_n=y^{(n)}\)? Weil \(y^{(n)}\) bereits durch Zustand und Eingang bestimmt wird. Es ist kein zusätzlicher unabhängiger Speicher.</p>
<div class="term-box"><b>Minimaler Zustand:</b> Eine Darstellung ist minimal, wenn sie weder unbeobachtbare noch unsteuerbare interne Moden enthält. Unterschiedliche Zustandswahlen können dasselbe Ein-/Ausgangsverhalten beschreiben.</div>
<div class="control-question"><b>Selbstkontrolle:</b> Kannst du für ein Feder-Masse-System erklären, warum Kraft kein Zustand, Geschwindigkeit aber ein Zustand ist?</div>`],
['Linearisierung als Taylor-Näherung',`
<p class="why">Linearisierung ist nicht bloß „Ableitungen bilden“. Sie ist die erste Ordnung einer Taylorentwicklung und damit eine lokale Aussage über kleine Abweichungen.</p>
<h3>Herleitung</h3><p>Schreibe \(x=x_R+\\Delta x\), \(u=u_R+\\Delta u\). Taylorentwicklung von \(f\) um den Arbeitspunkt:</p>
<div class="derivation">\\[f(x_R+\\Delta x,u_R+\\Delta u)\\approx f(x_R,u_R)+\\left.\\frac{\\partial f}{\\partial x}\\right|_R\\Delta x+\\left.\\frac{\\partial f}{\\partial u}\\right|_R\\Delta u\\]
<p>Da der Arbeitspunkt eine Ruhelage ist, gilt \(f(x_R,u_R)=0\). Daher bleibt:</p>\\[\\Delta\\dot x=A\\Delta x+B\\Delta u\\]</div>
<h3>Gültigkeitsbereich</h3><p>Die vernachlässigten Terme sind quadratisch und höher. Je weiter man sich vom Arbeitspunkt entfernt, desto größer kann der Fehler werden. Ein Regler auf Basis der Linearisierung ist deshalb zunächst nur lokal begründet.</p>
<div class="warning"><b>Wichtig:</b> Linearisieren um einen Punkt, der keine Ruhelage ist, ist möglich, führt aber zu einem zusätzlichen konstanten Term. Für die übliche Abweichungsdarstellung soll deshalb \(f(x_R,u_R)=0\) gelten.</div>`],
['Eigenwerte, Moden und Phasenportrait',`
<p class="why">Eigenwerte sind nicht nur Zahlen aus einer Determinante. Jeder Eigenvektor beschreibt eine Zustandsrichtung, die unter der Dynamik ihre Richtung beibehält; der Eigenwert beschreibt deren zeitliches Verhalten.</p>
<div class="derivation"><b>Modenidee</b><p>Für \(Av=\\lambda v\) und Anfangszustand \(x_0=v\):</p>\\[x(t)=e^{At}v=e^{\\lambda t}v\\]</div>
<div class="concept-grid"><div class="concept"><b>Reeller negativer Pol</b><p>Geradliniges exponentielles Abklingen.</p></div><div class="concept"><b>Komplexes Paar</b><p>Rotation/Schwingung mit exponentieller Hüllkurve.</p></div><div class="concept"><b>Jordanblock</b><p>Zusätzliche Faktoren \(t,t^2,\dots\) multiplizieren \(e^{\\lambda t}\).</p></div></div>
<p>Darum genügt bei Eigenwerten auf der imaginären Achse nicht immer der Realteil-Test: Ein Jordanblock zu \(\lambda=0\) kann durch den Faktor \(t\) unbeschränkt wachsen.</p>`],
['Steuerbarkeit geometrisch und algebraisch',`
<p class="why">Steuerbarkeit bedeutet nicht, dass jede einzelne Zustandsvariable direkt im Eingang vorkommt. Die Systemdynamik kann Eingangswirkung in weitere Richtungen transportieren.</p>
<p>Für kleine Zeitintervalle erzeugt der Eingang zunächst die Richtung \(B\), dann über die Dynamik \(AB\), danach \(A^2B\) usw. Der erreichbare Raum ist der Spann dieser Spalten.</p>
<div class="derivation">\\[\\mathcal C=\\operatorname{span}\\{B,AB,A^2B,\\dots,A^{n-1}B\\}\\]
<p>Nach Cayley-Hamilton bringen höhere Potenzen keine grundsätzlich neuen Richtungen mehr.</p></div>
<h3>PBH-Test als Alternative</h3><div class="matrix-display">\\[\\operatorname{rang}\\begin{bmatrix}\\lambda I-A&B\\end{bmatrix}=n\\quad\\text{für jeden Eigenwert }\\lambda\\]</div>
<p>Interpretation: Keine linke Eigenmode von \(A\) darf vom Eingang vollständig „übersehen“ werden.</p>
<div class="control-question"><b>Dimensionscheck:</b> Bei \(A\\in\\mathbb R^{n\\times n}\), \(B\\in\\mathbb R^{n\\times m}\) besitzt \(\mathcal R\) genau \(n\) Zeilen und \(nm\) Spalten.</div>`],
['Beobachtbarkeit, Dualität und unsichtbare Zustände',`
<p class="why">Ein Sensor misst oft nur eine Mischung von Zuständen. Beobachtbarkeit fragt, ob die Dynamik im Zeitverlauf genügend zusätzliche Information erzeugt, um alle Zustände auseinanderzuhalten.</p>
<p>Direkt ist \(Cx\) sichtbar. Durch zeitliches Ableiten erscheint \(CAx\), dann \(CA^2x\). Diese Zeilen müssen zusammen jede Zustandsrichtung unterscheiden können.</p>
<div class="derivation">\\[y=Cx,\\quad \\dot y=CAx+CBu,\\quad \\ddot y=CA^2x+\\dots\\]
\\[\\mathcal O=\\begin{bmatrix}C\\\\CA\\\\\\vdots\\\\CA^{n-1}\\end{bmatrix}\\]</div>
<p>Der nicht beobachtbare Raum ist \(\ker\\mathcal O\): Zustände darin erzeugen trotz unterschiedlicher interner Werte denselben Ausgangsverlauf.</p>
<div class="term-box"><b>Dualität:</b> \((C,A)\) ist beobachtbar genau dann, wenn \((A^T,C^T)\) steuerbar ist. Deshalb kann der Beobachterentwurf auf einen transponierten Reglerentwurf zurückgeführt werden.</div>`],
['Zustandsregler: Polwahl, Geschwindigkeit und Stellaufwand',`
<p class="why">Pole beliebig weit links zu setzen klingt attraktiv, ist praktisch aber problematisch. Schnelle Dynamik verlangt meist große Stellgrößen und reagiert empfindlicher auf Modellfehler.</p>
<div class="derivation">\\[u=-Kx\\quad\\Rightarrow\\quad\\dot x=(A-BK)x\\]</div>
<p>Die Rückführung verändert die Eigenwerte, aber nicht automatisch das stationäre Führungsverhalten. Für konstante Referenzen wird häufig ein Vorfilter ergänzt.</p>
<div class="matrix-display">\\[u=-Kx+Vr,\\qquad V=\\frac{1}{D-(C-DK)(A-BK)^{-1}B}\\]</div>
<div class="checklist"><b>Gute Polwahl</b><ul><li>Alle Pole stabil, also strikt links.</li><li>Nicht unnötig schnell.</li><li>Komplexe Pole passend zu erlaubtem Überschwingen.</li><li>Stellgrößenbegrenzung und Modellunsicherheit berücksichtigen.</li></ul></div>`],
['Beobachter: Korrekturprinzip und Separation',`
<p class="why">Der Beobachter ist ein Modell, das durch den Innovationsfehler \(y-\\hat y\) ständig an die Messung angeglichen wird.</p>
<div class="derivation">\\[\\dot{\\hat x}=A\\hat x+Bu+L(y-C\\hat x),\\qquad \\dot e=(A-LC)e\\]</div>
<p>Der Eingang verschwindet aus der Fehlerdynamik, weil echtes System und Beobachter denselben bekannten Eingang erhalten. Nur Anfangsfehler und Modell-/Messfehler bleiben relevant.</p>
<div class="term-box"><b>Separationsprinzip:</b> Reglerpole von \(A-BK\) und Beobachterpole von \(A-LC\) können unabhängig entworfen werden. Im kombinierten System bilden beide Polmengen gemeinsam die Dynamik.</div>
<div class="warning">Beobachterpole werden oft schneller als Reglerpole gewählt, aber nicht extrem schnell: Sonst wird Messrauschen stark verstärkt.</div>`],
['Übertragungsfunktion, interne Moden und Pol-Nullstellen-Kürzung',`
<p class="why">Zustandsraum und Übertragungsfunktion zeigen verschiedene Seiten desselben Systems. Die Übertragungsfunktion kann interne Vorgänge verstecken.</p>
<div class="derivation">\\[G(s)=C(sI-A)^{-1}B+D\\]</div>
<p>Ein Eigenwert von \(A\) erscheint nur dann als Pol in \(G(s)\), wenn seine Mode sowohl vom Eingang angeregt als auch am Ausgang sichtbar wird. Ist sie unsteuerbar oder unbeobachtbar, kann sie sich herauskürzen.</p>
<div class="warning"><b>Folge:</b> E/A-Stabilität garantiert interne asymptotische Stabilität nur bei einer minimalen Realisierung. Ein intern instabiler Zustand kann im Ausgang verborgen sein.</div>`],
['Vom Rechenergebnis zur belastbaren Kontrolle',`
<p class="why">Eine Lösung ist erst fertig, wenn sie geprüft wurde. Dimensions-, Vorzeichen- und Rückeinsetzungschecks entdecken viele Klausurfehler sofort.</p>
<div class="checklist"><b>Universelle Kontrollen</b><ul><li><b>Dimension:</b> Passt jede Matrixmultiplikation?</li><li><b>Grenzfall:</b> Ergibt sich bei \(u=0\) oder \(t=0\) ein plausibles Ergebnis?</li><li><b>Rückeinsetzen:</b> Erfüllt die Lösung die ursprüngliche Gleichung?</li><li><b>Eigenwerte:</b> Hat die entworfene geschlossene Matrix wirklich die gewünschten Pole?</li><li><b>Rang:</b> Ist eine verwendete inverse Matrix tatsächlich regulär?</li></ul></div>`]
];
deepModules.forEach((m,i)=>deepTheory.insertAdjacentHTML('beforeend',`<details class="deep-card"><summary>${i+1}. ${m[0]}</summary><div class="deep-body">${m[1]}</div></details>`));

const detailed={
'way-0-0':`<div class="solution-step"><span>A</span><div><h5>Eigenwertproblem aufstellen</h5><p>Eigenwerte sind genau die Werte \(\lambda\), für die \(A-\lambda I\) nicht invertierbar ist:</p>\\[\\det(A-\\lambda I)=0\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Charakteristisches Polynom</h5><p>Durch Entwicklung der Determinante ergibt sich:</p>\\[\\det(A-\\lambda I)=(\\lambda-1)(\\lambda-2)(\\lambda-3)\\]<p>Damit:</p>\\[\\lambda_1=1,\\qquad\\lambda_2=2,\\qquad\\lambda_3=3\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Eigenvektoren</h5><p>Für jeden Eigenwert wird das homogene Gleichungssystem \((A-\\lambda_iI)v_i=0\) gelöst. Eine mögliche Wahl ist:</p><div class="matrix-display">\\[v_1=\\begin{bmatrix}1\\\\1\\\\0\\end{bmatrix},\\qquad v_2=\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix},\\qquad v_3=\\begin{bmatrix}0\\\\1\\\\0\\end{bmatrix}\\]</div><p>Eigenvektoren dürfen mit jedem von null verschiedenen Faktor skaliert werden.</p></div></div>
<div class="solution-step"><span>I</span><div><h5>Lineare Gleichungssysteme</h5><p>Für \(Ax=b_1\) ist \(b_1\) im Bild von A, während \(\ker A\) nichttrivial ist: unendlich viele Lösungen \(x=x_p+\\alpha x_h\). Für \(b_2\) gilt \(\operatorname{rang}(A|b_2)>\operatorname{rang}(A)\): keine Lösung.</p></div></div>
<div class="solution-step"><span>K</span><div><h5>Kontrolle</h5><p>Jeden Eigenvektor durch \(Av_i=\\lambda_i v_i\) und jede LGS-Lösung durch Einsetzen prüfen.</p></div></div>`,
'way-0-2':`<div class="solution-step"><span>A</span><div><h5>Einheitliches DGL-Schema</h5><ol><li>Homogene charakteristische Gleichung lösen.</li><li>Passende Form der homogenen Lösung wählen.</li><li>Partikuläre Lösung für die rechte Seite bestimmen.</li><li>Anfangsbedingungen einsetzen.</li></ol></div></div>
<div class="solution-step"><span>R</span><div><h5>Homogene DGL erster Ordnung</h5>\\[\\dot y+3y=0\\Rightarrow \\lambda+3=0\\Rightarrow\\lambda=-3\\]
\\[y_h=C e^{-3t},\\qquad y(0)=3\\Rightarrow C=3\\Rightarrow\\boxed{y=3e^{-3t}}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Homogene DGL zweiter Ordnung</h5>\\[\\ddot y+2\\dot y+5y=0\\Rightarrow\\lambda^2+2\\lambda+5=0\\Rightarrow\\lambda=-1\\pm2i\\]
\\[y=e^{-t}(C_1\\cos2t+C_2\\sin2t)\\]<p>Aus \(y(0)=1\) folgt \(C_1=1\). Ableiten und \(\dot y(0)=-1\) einsetzen liefert \(C_2=0\).</p></div></div>
<div class="solution-step"><span>I</span><div><h5>Wurzeltypen verstehen</h5><p>Reelle verschiedene Wurzeln erzeugen reine Exponentialterme. Komplexe Paare erzeugen gedämpfte Schwingungen. Mehrfache Wurzeln erzeugen zusätzliche Faktoren \(t^k\).</p></div></div>
<div class="solution-step"><span>K</span><div><h5>Kontrolle</h5><p>Lösung ableiten, in die DGL einsetzen und anschließend sämtliche Anfangsbedingungen prüfen.</p></div></div>`,
'way-1-2':`<div class="solution-step"><span>A</span><div><h5>System (i): Ruhelagen</h5>\\[\\dot x=a\\tan x\\]<p>Für \(a\\ne0\) muss \(\tan x_R=0\) gelten:</p>\\[x_R=k\\pi,\\qquad k\\in\\mathbb Z\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>System (i): Linearisierung</h5>\\[A=\\left.\\frac{d}{dx}(a\\tan x)\\right|_{x_R}=a\\sec^2(x_R)=a\\]<p>Weil \(\cos(k\\pi)=\\pm1\), gilt \(\sec^2(k\\pi)=1\). Das lokale Modell ist \(\Delta\\dot x=a\\Delta x\).</p></div></div>
<div class="solution-step"><span>A</span><div><h5>System (ii): Ruhelagen</h5>\\[0=\\ln(x_{1,R})+u_R\\Rightarrow x_{1,R}=e^{-u_R}\\]
\\[0=-x_{1,R}+x_{2,R}^2\\Rightarrow x_{2,R}=\\pm\\sqrt{x_{1,R}}=\\pm e^{-u_R/2}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Jacobi-Matrizen</h5><div class="matrix-display">\\[A=\\begin{bmatrix}1/x_{1,R}&0\\\\-1&2x_{2,R}\\end{bmatrix},\\qquad B=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\]</div><p>Da A untere Dreiecksmatrix ist, sind die Eigenwerte die Diagonaleinträge:</p>\\[\\lambda_1=1/x_{1,R},\\qquad\\lambda_2=2x_{2,R}\\]</div></div>
<div class="solution-step"><span>K</span><div><h5>Plausibilität</h5><p>Da \(x_{1,R}>0\), ist \(\lambda_1>0\). Damit ist jede dieser Ruhelagen lokal instabil, unabhängig vom zweiten Eigenwert.</p></div></div>`,
'way-2-0':`<div class="solution-step"><span>A</span><div><h5>Zwei Vielfachheiten unterscheiden</h5><p>Die algebraische Vielfachheit \(n_k\) liest man aus dem charakteristischen Polynom. Die geometrische Vielfachheit ist:</p>\\[g_k=\\dim\\ker(A-\\lambda_kI)=n-\\operatorname{rang}(A-\\lambda_kI)\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Beispiel \(A_1\)</h5>\\[p(\\lambda)=(1-\\lambda)^3\\Rightarrow n_1=3\\]<p>Die Rangprüfung ergibt \(g_1=2\). Es existieren also nur zwei unabhängige Eigenvektoren für eine dreidimensionale Matrix.</p></div></div>
<div class="solution-step"><span>I</span><div><h5>Folge für Transformation</h5><p>Weil \(g_1<n_1\), lässt sich keine Eigenvektormatrix V mit drei unabhängigen Spalten bilden. \(A_1\) ist nicht diagonalisierbar und benötigt eine Jordanform.</p></div></div>
<div class="solution-step"><span>K</span><div><h5>Allgemeiner Test</h5><p>Eine \(n\\times n\)-Matrix ist genau dann diagonalisierbar, wenn insgesamt n linear unabhängige Eigenvektoren existieren.</p></div></div>`,
'way-2-1':`<div class="solution-step"><span>A</span><div><h5>Eigenwerte und Eigenvektoren</h5><p>Für \(A=\\begin{bmatrix}-4&2\\\\-3&1\\end{bmatrix}\) gilt:</p>\\[\\lambda_1=-2,\\quad v_1=\\begin{bmatrix}1\\\\1\\end{bmatrix},\\qquad \\lambda_2=-1,\\quad v_2=\\begin{bmatrix}2\\\\3\\end{bmatrix}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Transformation</h5><div class="matrix-display">\\[V=\\begin{bmatrix}1&2\\\\1&3\\end{bmatrix},\\qquad V^{-1}=\\begin{bmatrix}3&-2\\\\-1&1\\end{bmatrix}\\]</div>\\[\\tilde A=V^{-1}AV=\\begin{bmatrix}-2&0\\\\0&-1\\end{bmatrix}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Transitionsmatrix</h5>\\[e^{\\tilde A t}=\\begin{bmatrix}e^{-2t}&0\\\\0&e^{-t}\\end{bmatrix}\\]
\\[\\Phi(t)=Ve^{\\tilde A t}V^{-1}\\]</div></div>
<div class="solution-step"><span>I</span><div><h5>Bedeutung</h5><p>In z-Koordinaten laufen zwei entkoppelte skalare Systeme. Die Rücktransformation mischt beide Moden wieder zu den Originalzuständen.</p></div></div>
<div class="solution-step"><span>K</span><div><h5>Transitionsmatrix prüfen</h5><p>Es muss \(\Phi(0)=I\) und \(\dot\\Phi(t)=A\\Phi(t)\) gelten.</p></div></div>`,
'way-2-2':`<div class="solution-step"><span>A</span><div><h5>Stabilitätskriterium</h5><p>Ein kontinuierliches LTI-System ist asymptotisch stabil genau dann, wenn alle Eigenwerte strikt negative Realteile besitzen.</p></div></div>
<div class="solution-step"><span>R</span><div><h5>Direkt ablesbarer Fall</h5><p>Für eine Diagonalmatrix mit Diagonale \(-3,3,-1,-2\) ist \(\lambda=3>0\). Damit ist das System sofort instabil.</p></div></div>
<div class="solution-step"><span>R</span><div><h5>Parametrischer Fall</h5>\\[A_3=\\begin{bmatrix}-1&2\\\\0&2+a\\end{bmatrix}\\Rightarrow\\lambda_1=-1,\\quad\\lambda_2=2+a\\]
<p>Beide müssen negativ sein. Die einzige zusätzliche Bedingung lautet:</p>\\[2+a<0\\Rightarrow\\boxed{a<-2}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Komplexer Fall</h5>\\[\\lambda_{1,2}=-1\\pm4i\\]<p>Der Realteil ist jeweils \(-1<0\). Die Lösung schwingt, ihre Hüllkurve \(e^{-t}\) klingt jedoch ab.</p></div></div>
<div class="solution-step"><span>K</span><div><h5>Keine Kurzschlüsse</h5><p>Das Vorzeichen der Matrixeinträge allein sagt nichts Sicheres über Stabilität aus; entscheidend sind ausschließlich die Eigenwerte beziehungsweise ein äquivalentes Stabilitätskriterium.</p></div></div>`,
'way-1-0':`<div class="solution-step"><span>A</span><div><h5>Systeme einzeln untersuchen</h5><p>Linearität und Zeitinvarianz sind zwei unabhängige Eigenschaften. Wir prüfen daher bei jedem System zuerst die Form in \(x,u\) und danach das Auftreten von \(t\).</p></div></div>
<div class="solution-step"><span>R</span><div><h5>System (i)</h5>\\[\\dot x=\\begin{bmatrix}a(t)x_2^2\\\\-cx_1+t^2\\log(u)\\end{bmatrix}\\]<p>\(x_2^2\) und \(\log(u)\) verletzen Superposition: <b>nichtlinear</b>. \(a(t)\) und \(t^2\) hängen explizit von Zeit ab: <b>zeitvariant</b>.</p></div></div>
<div class="solution-step"><span>R</span><div><h5>System (ii)</h5>\\[\\dot x=\\begin{bmatrix}t x_2\\\\-e^t x_1+u\\end{bmatrix}=A(t)x+B u\\]<p>Alle Zustände und Eingänge treten nur erster Potenz und ohne Produkte auf: <b>linear</b>. Wegen \(t,e^t\): <b>zeitvariant</b>.</p></div></div>
<div class="solution-step"><span>R</span><div><h5>Systeme (iii) und (iv)</h5><p>(iii) besitzt nur konstante Koeffizienten und lineare Terme: <b>LTI</b>. (iv) enthält \(x_1x_2\): <b>nichtlinear</b>, aber ohne explizites \(t\): <b>zeitinvariant</b>.</p></div></div>
<div class="solution-step"><span>K</span><div><h5>Schnelltest</h5><p>Setze bei Verdacht auf Nichtlinearität \(x=x^{(1)}+x^{(2)}\) ein. Bei einem Produkt entsteht ein zusätzlicher Kreuzterm, der Superposition verletzt.</p></div></div>`,
'way-1-1':`<div class="solution-step"><span>A</span><div><h5>Definition anwenden</h5><p>Für \(f:\\mathbb R^n\\to\\mathbb R^m\) ist \(J_f\\in\\mathbb R^{m\\times n}\) und \(J_{ij}=\\partial f_i/\\partial x_j\).</p></div></div>
<div class="solution-step"><span>R</span><div><h5>Erste Funktion</h5>\\[f(x)=\\begin{bmatrix}\\sin(x_1)x_2^2\\\\e^{-\\alpha x_1x_2}\\end{bmatrix}\\]
\\[\\frac{\\partial f_1}{\\partial x_1}=\\cos(x_1)x_2^2,\\quad \\frac{\\partial f_1}{\\partial x_2}=2x_2\\sin(x_1)\\]
\\[\\frac{\\partial f_2}{\\partial x_1}=-\\alpha x_2e^{-\\alpha x_1x_2},\\quad \\frac{\\partial f_2}{\\partial x_2}=-\\alpha x_1e^{-\\alpha x_1x_2}\\]</div></div>
<div class="solution-step"><span>I</span><div><h5>Sauber zusammensetzen</h5><div class="matrix-display">\\[J_f(x)=\\begin{bmatrix}\\cos(x_1)x_2^2&2x_2\\sin(x_1)\\\\-\\alpha x_2e^{-\\alpha x_1x_2}&-\\alpha x_1e^{-\\alpha x_1x_2}\\end{bmatrix}\\]</div><p>Zeilen gehören zu Funktionen, Spalten zu Variablen.</p></div></div>
<div class="solution-step"><span>K</span><div><h5>Dimensionscheck</h5><p>Zwei Funktionen und zwei Variablen ergeben zwingend eine \(2\\times2\)-Matrix.</p></div></div>`,
'way-1-3':`<div class="solution-step"><span>A</span><div><h5>Variation der Konstanten</h5><p>Gegeben ist \(\dot x=\\lambda x+bu\) mit konstantem \(u\). Die allgemeine LTI-Lösung lautet:</p>\\[x(t)=e^{\\lambda t}x_0+\\int_0^t e^{\\lambda(t-\\tau)}bu\\,d\\tau\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Integral auswerten</h5>\\[\\int_0^t e^{\\lambda(t-\\tau)}bu\\,d\\tau=bu\\,e^{\\lambda t}\\int_0^t e^{-\\lambda\\tau}d\\tau\\]
\\[=bu\\,e^{\\lambda t}\\frac{1-e^{-\\lambda t}}{\\lambda}=\\frac{bu}{\\lambda}(e^{\\lambda t}-1)\\]</div></div>
<div class="solution-step"><span>I</span><div><h5>Gesamtlösung</h5>\\[\\boxed{x(t)=e^{\\lambda t}x_0+\\frac{bu}{\\lambda}(e^{\\lambda t}-1)}\\quad(\\lambda\\ne0)\\]<p>Bei \(\lambda<0\) nähert sich \(x\) dem stationären Wert \(-bu/\\lambda\).</p></div></div>
<div class="solution-step"><span>K</span><div><h5>Kontrolle</h5><p>Bei \(t=0\) folgt \(x(0)=x_0\). Ableiten und Einsetzen ergibt wieder \(\dot x=\\lambda x+bu\).</p></div></div>`,
'way-3-0':`<div class="solution-step"><span>A</span><div><h5>Offenes System prüfen</h5><p>Die Matrix ist obere Dreiecksmatrix. Bei Dreiecksmatrizen sind die Eigenwerte die Diagonaleinträge.</p><div class="matrix-display">\\[A=\\begin{bmatrix}1&0&3\\\\0&2&2\\\\0&0&1\\end{bmatrix}\\]</div></div></div>
<div class="solution-step"><span>R</span><div><h5>Eigenwerte ablesen</h5>\\[\\lambda_1=1,\\qquad\\lambda_2=2,\\qquad\\lambda_3=1\\]</div></div>
<div class="solution-step"><span>I</span><div><h5>Stabilitätsaussage</h5><p>Alle Realteile sind positiv. Die Moden \(e^t\) und \(e^{2t}\) wachsen. Das System ist daher instabil.</p></div></div>
<div class="solution-step"><span>K</span><div><h5>Kontrolle über Polynom</h5>\\[\\det(\\lambda I-A)=(\\lambda-1)^2(\\lambda-2)\\]</div></div>`,
'way-3-1':`<div class="solution-step"><span>A</span><div><h5>Steuerbarkeitsmatrix aufbauen</h5><p>Für \(n=3\): \(\mathcal R=[b,Ab,A^2b]\).</p>\\[b=\\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Erste Weiterwirkung</h5>\\[Ab=\\begin{bmatrix}1&0&3\\\\0&2&2\\\\0&0&1\\end{bmatrix}\\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix}=\\begin{bmatrix}3\\\\2\\\\1\\end{bmatrix}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Zweite Weiterwirkung</h5>\\[A^2b=A(Ab)=\\begin{bmatrix}1&0&3\\\\0&2&2\\\\0&0&1\\end{bmatrix}\\begin{bmatrix}3\\\\2\\\\1\\end{bmatrix}=\\begin{bmatrix}6\\\\6\\\\1\\end{bmatrix}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Matrix und Determinante</h5><div class="matrix-display">\\[\\mathcal R=\\begin{bmatrix}0&3&6\\\\0&2&6\\\\1&1&1\\end{bmatrix},\\qquad\\det\\mathcal R=6\\ne0\\]</div></div></div>
<div class="solution-step"><span>I</span><div><h5>Ergebnis</h5><p>Rang 3 entspricht der Systemordnung. Das System ist vollständig steuerbar.</p></div></div>`,
'way-3-2':`<div class="solution-step"><span>A</span><div><h5>Gewünschtes Polynom</h5>\\[p^*(\\lambda)=(\\lambda+1)^2(\\lambda+2)=\\lambda^3+4\\lambda^2+5\\lambda+2\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Matrixpolynom und Ackermann</h5>\\[p^*(A)=A^3+4A^2+5A+2I\\]
\\[k^T=e_3^T\\mathcal R^{-1}p^*(A),\\qquad e_3^T=\\begin{bmatrix}0&0&1\\end{bmatrix}\\]
<p>Mit der zuvor berechneten \(\mathcal R\) ergibt die vollständige Matrixmultiplikation:</p>\\[\\boxed{k^T=\\begin{bmatrix}-4&18&8\\end{bmatrix}}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Geschlossene Matrix</h5>\\[A_{cl}=A-bk^T=\\begin{bmatrix}1&0&3\\\\0&2&2\\\\4&-18&-7\\end{bmatrix}\\]</div></div>
<div class="solution-step"><span>K</span><div><h5>Polkontrolle</h5>\\[\\det(\\lambda I-A_{cl})=(\\lambda+1)^2(\\lambda+2)\\]<p>Die gewünschten Pole \(-1,-1,-2\) wurden erreicht.</p></div></div>`,
'way-3-3':`<div class="solution-step"><span>A</span><div><h5>Beobachtbarkeitsmatrix</h5><p>Setze \(C=\\begin{bmatrix}\\alpha&\\beta&\\gamma\\end{bmatrix}\) in \(\mathcal O=[C;CA;CA^2]\) ein.</p></div></div>
<div class="solution-step"><span>R</span><div><h5>Zeilen berechnen</h5>\\[CA=\\begin{bmatrix}\\alpha&2\\beta&3\\alpha+2\\beta+\\gamma\\end{bmatrix}\\]
\\[CA^2=\\begin{bmatrix}\\alpha&4\\beta&6\\alpha+6\\beta+\\gamma\\end{bmatrix}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Determinante</h5><div class="matrix-display">\\[\\mathcal O=\\begin{bmatrix}\\alpha&\\beta&\\gamma\\\\\\alpha&2\\beta&3\\alpha+2\\beta+\\gamma\\\\\\alpha&4\\beta&6\\alpha+6\\beta+\\gamma\\end{bmatrix}\\]</div>\\[\\det\\mathcal O=-3\\alpha^2\\beta\\]</div></div>
<div class="solution-step"><span>I</span><div><h5>Nicht beobachtbare Fälle</h5><p>\(\det\\mathcal O=0\) genau für \(\alpha=0\) oder \(\beta=0\). Der Wert von \(\gamma\) ändert diese Bedingung nicht.</p></div></div>`,
'way-3-4':`<div class="solution-step"><span>A</span><div><h5>Ausgangsmatrix einsetzen</h5>\\[C=\\begin{bmatrix}1&1&0\\end{bmatrix},\\quad \\mathcal O=\\begin{bmatrix}C\\\\CA\\\\CA^2\\end{bmatrix}=\\begin{bmatrix}1&1&0\\\\1&2&5\\\\1&4&12\\end{bmatrix}\\]</div></div>
<div class="solution-step"><span>R</span><div><h5>Beobachtbarkeit prüfen</h5>\\[\\det\\mathcal O=-3\\ne0\\]<p>Damit darf die Fehlerdynamik frei vorgegeben werden.</p></div></div>
<div class="solution-step"><span>R</span><div><h5>Beobachter-Ackermann</h5>\\[l=p^*(A)\\mathcal O^{-1}e_3,\\qquad p^*(A)=A^3+4A^2+5A+2I\\]
\\[\\boxed{l=\\begin{bmatrix}-36\\\\44\\\\-4\\end{bmatrix}}\\]</div></div>
<div class="solution-step"><span>K</span><div><h5>Fehlerdynamik kontrollieren</h5>\\[A-lC=\\begin{bmatrix}37&36&3\\\\-44&-42&2\\\\4&4&1\\end{bmatrix}\\]
\\[\\det(\\lambda I-(A-lC))=(\\lambda+1)^2(\\lambda+2)\\]</div></div>`
};
Object.entries(detailed).forEach(([id,html])=>{const el=document.getElementById(id);if(el)el.innerHTML=html});
if(window.MathJax?.typesetPromise)MathJax.typesetPromise([deepTheory,tutorials]);
