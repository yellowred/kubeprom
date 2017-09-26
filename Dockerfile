FROM golang

# Copy the local package files to the container's workspace.
ADD . /go/src/app-pod-metrics

WORKDIR /go/src/app-pod-metrics

RUN go install .

# Run the outyet command by default when the container starts.
ENTRYPOINT /go/bin/app-pod-metrics

# Document that the service listens on port 8080.
EXPOSE 8080