Project Description:-

Libraries Used:

* Created the project using npx create-react-app
* Installed UI components using react-bootstrap and bootstrap
* Added routing support using react-router-dom

Implementation Steps:

* Created a pages folder inside src and added a page called URLPage.
* Built a reusable SearchBar component using React-Bootstrap and customized it based on the requirements.
* Imported and used the BasicExample (SearchBar) component inside URLPage.

Functionality:

* Used useState to manage:

  * Score
  * Message
  * Issues list

* On clicking the Analyze button:

  * A Random score (between 50–100) is generated.
  * Based on the score:

    * If score > 90 → shows *Excellent AI readiness* with minor issues
    * If score ≥ 80 → shows *Good but needs improvement*
    * If score ≥ 65 → shows *Needs improvement*
    * Else → shows *Poor structure* with more critical issues

* Each score range dynamically displays a relevant message and a list of issues.

Styling:

* Used React-Bootstrap components like Card, Form, and Button for layout.
* Added custom CSS to improve spacing, alignment, and overall UI.
* Ensured the UI is clean, responsive, and user-friendly.

Summary:

This project simulates an AI Readiness Audit tool where users can enter a URL and get a mock analysis including a score, feedback message, and improvement suggestions.
