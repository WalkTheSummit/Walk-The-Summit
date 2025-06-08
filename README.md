
Built by https://www.blackbox.ai

---

# Walk The Summit (WTS)

## Project Overview
Walk The Summit (WTS) is a student-led organization committed to transforming the lives of children in remote Himalayan villages through education and resources. Our mission is to bridge the educational divide between urban and rural areas by providing the necessary skills and resources for children to thrive academically and personally. We aim to empower children with essential 21st-century skills while ensuring they connect with their cultural roots.

## Installation
To run the project locally, you may clone the repository and use a simple HTTP server. Follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/swaritz/walk-the-summit.git
   cd walk-the-summit
   ```
2. Install dependencies (if there are any indicated in a potential future `package.json` file):
   ```bash
   npm install
   ```
3. Start a local server (using any static server):
   ```bash
   npx http-server .
   ```
4. Open your web browser and navigate to `http://localhost:8080`.

## Usage
- Visit the website at [Walk The Summit](https://walkthesummit.org).
- Explore the various projects and initiatives aimed at improving education for underprivileged children.
- Use the contact form located on the contact page to reach out for further questions or involvement.
- Get involved by donating through the donation page.

## Features
- **Responsive Design**: Utilizes classes to control responsive behavior for desktop and mobile interfaces.
- **Animations**: Incorporates the GSAP (GreenSock Animation Platform) for smooth visual transitions.
- **Community Involvement**: Features a contact form powered by Formspree API for applications to volunteer or donate.
- **Education Programs**: Specific programs and resources offered to build essential skills among the children of the Himalayas.

## Dependencies
- **GSAP (GreenSock Animation Platform)**: For animations and visual transitions.
  
No explicit `package.json` file is present, but future enhancements may require relevant dependencies.

## Project Structure
```plaintext
├── index.html                 # Main page of the application
├── about.html                 # About the organization
├── contact.html               # Contact form for inquiries
├── donate.html                # Page for donations
├── faqs.html                  # Frequently Asked Questions section
├── media.html                 # Media and press release sections
├── projects.html              # Overview of current and past projects
├── assets/                     # Directory for static assets
│   ├── css/                   # Stylesheets
│   ├── images/                # Images used throughout the site
│   └── js/                    # JavaScript files for interactivity
└── documents/                 # Additional documentation (e.g., developer guide)
```

## Acknowledgements
- The project incorporates code from [grilli](https://github.com/codewithsadee/grilli), which is licensed under the MIT License. Original copyright (c) 2022 [Sadee](https://github.com/codewithsadee).
- Additional modifications copyright (c) 2024 [Swaritz](https://github.com/swaritz).

## Contact
For any inquiries or collaboration, reach out via email at [walkthesummit@gmail.com](mailto:walkthesummit@gmail.com).

Happy coding!  
— Swarit 💻