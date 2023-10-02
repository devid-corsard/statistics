#!/usr/bin/env bash
set -x
set -eo pipefail

if ! [ -x "$(command -v psql)" ]; then
  echo  "Error: psql is not installed."
  exit 1
fi

DB_USER=${POSTGRES_USER:=daddy}
DB_PASSWORD="${POSTGRES_PASSWORD:=daddyshome}"
DB_NAME="${POSTGRES_DB:=statistic}"
DB_PORT="${POSTGRES_PORT:=5432}"

# Allow to skip Docker if a dockerized Postgres database is already running
if [[ -z "${SKIP_DOCKER}" ]]
then
  docker run \
      -e POSTGRES_USER=${DB_USER} \
      -e POSTGRES_PASSWORD=${DB_PASSWORD} \
      -e POSTGRES_DB=${DB_NAME} \
      -p "${DB_PORT}":5432 \
      -d postgres:15-alpine \
      postgres -N 1000
fi

export PGPASSWORD="${DB_PASSWORD}"

until psql -h "localhost" -U "${DB_USER}" -p "${DB_PORT}" -d "postgres" -c '\q'
do
  echo "Postgres is still unavailable - sleeping"
  sleep 1
done

echo "Postgres is up and running on port ${DB_PORT}"
