# Basics

- PostgreSQL17 => start server (elephant icon) => select DB
- terminal => psql (to enter REPL), \q (to quit)
  - \l (to list all databases), \d (to list all tables)
  - \c databasename (to connect to database) (or use GUI)

# Prerequisites

- Database Management System (DBMS): PostgreSQL 17,
- CLI Client: terminal => psql (comes with DMBS),
- GUI Client: PG Admin, DBeaver etc.,

# Path

- add to path to get access to CLI psql command:
- terminal => vi .zshrc => export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/17/bin
- terminal => source .zshrc (or just restart terminal),

<!-- # GUI

- new connection (any name of the connection),
- host: localhost,
- port: 5432,
- database name to which we want to connect,
- username (any username),
- password (optional),

# CLI:

## connect to database + commands:

- psql => help => to see short list of hints;
- psql => e.g. \q (quit), \? (more help);
- psql => CREATE DATABASE databasename;
- psql -h localhost -p 5432 -U llebioda databasename (to connect to a database);
- or: \c databasename
- psql => \l => list all databases
- psql => \d => list all tables
- psql => \d tablename => displays particular table -->
