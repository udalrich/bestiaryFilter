package controllers;

import java.io.IOException;
import java.io.StringReader;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
import models.MonsterData;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.apache.commons.io.FileUtils;
import play.libs.Json;
import play.mvc.*;
/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        return ok(views.html.index.render());
    }

  public Result redirectRoot() {
    return redirect("/ui/index.html");
  }

  public Result monsterData() throws IOException, URISyntaxException {
    URL dataFile = getClass().getResource("/Bestiary06-02-10.csv");
    String content =
      new String(
          Files.readAllBytes(
              Paths.get(dataFile.toURI())));

    Collection<Map<String, String>> data = new ArrayList<>();

    CSVParser parser = CSVFormat.DEFAULT.
      withHeader().
      withRecordSeparator("\n").
      parse(new StringReader(content));

    for (CSVRecord record: parser) {
      Map<String, String> map = record.toMap();
      data.add(map);
    }

    MonsterData monsters =
      MonsterData.builder().
      data(data).
      headers(new ArrayList<>(parser.getHeaderMap().keySet())).
      build();

    return ok(Json.toJson(monsters));
  }

}
