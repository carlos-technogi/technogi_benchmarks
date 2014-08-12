import play.Project._

name := "play_scala_bm"

version := "1.0"

playScalaSettings

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  "mysql" % "mysql-connector-java" % "5.1.18"
)

