import React from 'react'
import "./solve.css"

export default function Solve() {
  return (
    <main>
        <header class = "probsolve">
            <h1>name of problem</h1>
            <nav><a href="#" class = "style-link" >Tags</a></nav>
        </header>
        <div class = "probsec">
            <section class="probdetails">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus enim illum ipsa pariatur odit excepturi atque, odio distinctio iusto facere aut praesentium. A dolorem accusantium rerum, recusandae hic voluptatem.</p>
                <br />
                <nav>
                    <p>constraints:</p>
                    <p>input:</p>
                    <p>output:</p>
                </nav>
            </section>

            <section class = "codesec">
                <select name="languages" id="lang">
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="py">Python</option>
                </select>
                <textarea name="code" id="" cols="80" rows="40"></textarea>
                <div class="buttons">
                    <button>compile & run</button>
                    <button>Sumbit</button>
                </div>
                <label>Output</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </section>
        </div>
    </main>
  )
}
