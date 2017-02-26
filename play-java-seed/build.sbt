name := """play-java-seed"""
organization := "udalrich"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.8"

libraryDependencies += filters

import com.github.mmizutani.sbt.gulp.PlayGulpPlugin

import PlayGulpPlugin._
import PlayGulpKeys._

unmanagedResourceDirectories in Assets <+= (gulpDirectory in Compile)(base => base / "../target/gulp")
sourceDirectories in TwirlKeys.compileTemplates in Compile ++= Seq(gulpDirectory.value / "app")

