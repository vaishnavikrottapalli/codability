import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import React from "react";

export default function Home() {
  return (
    <div class="home">
      <table id="problem-table">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Tags</th>
            <th>Difficulty 
              <select id="difficulty-filter">
                <option value="">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </th>
            <th>Status
              <select id="status-filter">
                <option value="">All</option>
                <option value="Solved">Solved</option>
                <option value="Unsolved">Unsolved</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Problem 1</td>
            <td>
              <span class="tag">Math</span>
            </td>
            <td>
              <span class="difficulty">Medium</span>
            </td>
            <td>
              <span class="status">Solved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
          <tr>
            <td>Problem 2</td>
            <td>
              <span class="tag">String</span>
            </td>
            <td>
              <span class="difficulty">Easy</span>
            </td>
            <td>
              <span class="status">Unsolved</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
