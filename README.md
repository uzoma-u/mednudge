
# 💊 Mednudge

Mednudge is a **medication tracking web application** that helps users manage their medication schedules with timely reminders, log their doses, and maintain adherence over time. Designed for both **patients and doctors**, Mednudge also offers a secure, role-based system to control access, with future support for fine-grained Attribute-Based Access Control (ABAC). Users can also **share their medication records with doctors**, enabling better communication and support. A secure chat feature is planned for future releases.

---

## 🚀 Features

- ⏰ **Medication Reminders** – Get notified when it's time to take your medication
- 🧾 **Logging** – Track whether medications were taken or missed
- 📊 **Adherence Reports** – Review your medication history over time
- 🔄 **Record Sharing** – Share logs with your doctor
- 🧑‍⚕️ **Role-Based Access (RBAC)** – Separate functionality for patients and doctors
- 🛡️ **Future ABAC Support** – Attribute-based control for even tighter access rules
- 💬 **Coming Soon** – Doctor-patient chat feature for real-time support
----------------------------------------------------------------------------

## 🛠️ Tech Stack

- **Backend**: [Node.js](https://nodejs.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Sequelize](https://sequelize.org/)
- **Authentication**: Role-Based Access Control (RBAC), with ABAC planned
- **Configuration**: Managed via `dotenv` and `config` npm package

-----------------------------------------------------------------------------

## 📁 Project Structure

mednudge/
│
├── server.js # Main entry point
├── app.js # App and middleware config
├── .env
├── .gitignore
├── package.json
├── README.md
│
├── config/ # App configuration (default and env-based)
│
├── src/
│ ├── user/ # User entity
│ ├── role/ # Role entity
│ ├── permission/ # Permission entity
│ ├── department/ # Department (optional ABAC entity)
│ ├── auth/ # Auth logic (login, JWT, role checks)
│ ├── middleware/ # Global middleware (e.g., error handling, RBAC checks)
│ ├── db/ # Database connection and initialization
│ ├── utils/ # Helper functions
│ └── validations/ # Input validation logic
│
└── LICENSE

---------------------------------------------------------------------------

## 📄 License

[MIT](LICENSE)

---------------------------------------------------------------------------

