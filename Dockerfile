FROM openjdk:8-alpine

COPY target/uberjar/diabetes-dashboard.jar /diabetes-dashboard/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/diabetes-dashboard/app.jar"]
