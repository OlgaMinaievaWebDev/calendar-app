import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
function CalendarApp() {
  return (
    <div>
      <div>
        <h1>Calendar</h1>
        <div>
          <h2>May,</h2>
          <h2>2024</h2>
          <div>
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>
        <div>
          <span>Sunday</span>
          <span>Monday</span>
          <span>Tuesday</span>
          <span>Wednesday</span>
          <span>Thursday</span>
          <span>Friday</span>
          <span>Saturday</span>
        </div>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>time</div>
            <input type="number" name="hours" min={0} max={24} />
            <input type="number" name="minutes" min={0} max={59} />
          </div>
          <textarea placeholder="Enter Event Text"></textarea>
          <button>Add Event</button>
          <button>
            <FaWindowClose />
          </button>
        </div>
        <div>May, 15 2024</div>
        <div>10:01</div>
        <div></div>
        <div>Meeting with John</div>
        <div>
          <FaEdit />
          <FaMessage />
        </div>
      </div>
    </div>
  );
}

export default CalendarApp;
