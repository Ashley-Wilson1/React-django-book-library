# syntax=docker/dockerfile:1

ARG PYTHON_VERSION=3.12.5
FROM python:${PYTHON_VERSION}-slim as base

# Prevents Python from writing pyc files.
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install MySQL client dependencies
RUN apt-get update && apt-get install -y \
    default-libmysqlclient-dev \
    build-essential \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Create a non-privileged user
ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser

# Install Python dependencies
COPY requirements.txt .
RUN python -m pip install --no-cache-dir -r requirements.txt

# Switch to the non-privileged user
USER appuser

# Copy application source code
COPY . .

# Expose the port the application listens on
EXPOSE 8000

# Run the application
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
