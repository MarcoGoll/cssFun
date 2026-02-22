class CSSSnippets {
    static translation =
        `.translation{
    animation: translation 2s ease-in-out infinite alternate;
}

@keyframes translation {
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(100px);
    }
}`;
    static rotation =
        `.rotation{
    animation: rotation 2s linear infinite;
}

@keyframes rotation {
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
}`;
    static scaling =
        `.scaling{
    animation: scaling 2s ease-in-out infinite;
}

@keyframes scaling {
    0%,100%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.2);
    }
}`;
    static skewing =
        `.skewing{
    animation: skewing 2s ease-in-out infinite;
}

@keyframes skewing {
    0%,100%{
        transform: skew(0, 0); /* skews the element 15 degrees along the x-axis, and 15 degrees along the y-axis */

    }
    50%{
        transform: skew(15deg, 15deg); /* skews the element 15 degrees along the x-axis, and 15 degrees along the y-axis */
    }
}`;
    static morphing =
        `.morphing{
    animation: morphing 2s ease-in-out infinite;
}

@keyframes morphing {
    0%,100%{
        width: 100px;
        height: 100px;
    }
    50%{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
}`;
    static opacity =
        `.opacity{
    animation: opacity 2s ease-in-out infinite alternate;
}

@keyframes opacity {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}`;
    static blur =
        `.blur{
    animation: blur 2s ease-in-out infinite alternate;
}

@keyframes blur {
    0%,100%{
        filter: blur(0);
    }
    50%{
        filter: blur(5px);
    }
}`;
    static glow =
        `.glow{
    animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
    0%,100%{
        box-shadow:0px 0px 0px deeppink;
    }
    50%{
        box-shadow:0px 0px 10px deeppink;
    }
}`;
    static bgColor =
        `.bgColor{
    animation: bgColor 2s ease-in-out infinite alternate;
}

@keyframes bgColor {
    0%{
        background-color: var(--clr-green-light);
    }
    100%{
        background-color: deeppink;
    }
}`;
    static mask =
        `.maskParent{
    position: relative;

}
.maskChild{
    position: absolute;
    inset: 0; /*top,left,right,bottom alle auf 0*/
    background-color: deeppink;
    clip-path: circle(0% at bottom);
    animation: mask 2s ease-in-out infinite alternate;
}

@keyframes mask {
    0%,100%{
        clip-path: circle(0% at bottom);
    }
    100%{
        clip-path: circle(120% at bottom);
    }
}`;
    static perspektive =
        `.perspektiveParent{
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 200px; /*kleiner Wert (z.B. 100px) = extremere Verzerrung (nah dran), größer (z.B. 1000px) = subtiler. (weit weg)*/ 
}

.perspektiveChild{
    animation: perspektive 2s ease-in-out infinite alternate;
    transform-style: preserve-3d;
    border: 5px solid black;
    padding: 8px;
    background-color: deeppink;
}

@keyframes perspektive {
    0%,100%{
        transform: rotateY(0deg) translateZ(0);
    }
    100%{
        transform: rotateY(-45deg) translateZ(30px);
    }
}`;

    static copyToClipboard(type) {
        const code = CSSSnippets[type];
        if (!code) {
            console.warn(`Kein Snippet für "${type}" gefunden.`);
            return;
        }
        navigator.clipboard.writeText(code).then(() => {
            CSSSnippets.showCopiedMessage();
        });
    }

    static showCopiedMessage() {
        const msg = document.createElement("div");
        msg.textContent = "Copied!";
        msg.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #eaff00;
            color: #000000;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 14px;
            opacity: 1;
            transition: opacity 0.5s ease;
            z-index: 9999;
            `;

        document.body.appendChild(msg);

        setTimeout(() => {
            msg.style.opacity = "0";
            setTimeout(() => msg.remove(), 500);
        }, 2500);
    }
}


