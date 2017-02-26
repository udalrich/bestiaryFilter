name := """bestiary-filter"""
organization := "udalrich"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.8"

libraryDependencies ++= Seq(
  filters,
  "org.apache.commons" % "commons-csv" % "1.4"
)


import com.github.mmizutani.sbt.gulp.PlayGulpPlugin

import PlayGulpPlugin._
import PlayGulpKeys._

unmanagedResourceDirectories in Assets += {
  (gulpDirectory in Compile)(base => base / "../target/gulp").value
}

sourceDirectories in TwirlKeys.compileTemplates in Compile ++= Seq(gulpDirectory.value / "app")

