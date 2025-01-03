2024.12.30 (kid) This is a tech architecture draft. We can keep this organic if stuff will change in the future + reasoning behind decisions.

My initial idea was:  

BACKEND:  
- Go  
- Echo (minimalistic Golang framework)  
- Postgres (we can also go for SQLite ?)  
- Docker
- (Networking to be handled by some bitch basic Traefik or Nginx config)

FRONTEND:  
- Golang Templates  
- HTMX (for interactve parts of UI, compute everything on backend server and serve HTML directly, keep things basic)  
- Tailwind (or vanilla CSS, whatever you guys prefer)  

SECURITY:  
- architect cookie and session handling before starting to implement anything  
- plan one sprint to do the user/login logic ourselves (we don't need to throw the kitchen sink, keep it simple)  
- SQL stuff is no problem as long as we use parametized queries (and don't just concatenate strings, like ... it's really that easy)  

---

2025.01.03 (kid) Some architecture changes:  

FRONTEND:  
- use Angular (main argument: better hireability versus HTMX)

ARCHITECTURE:
- complete codebase separation between frontend client and backend server
