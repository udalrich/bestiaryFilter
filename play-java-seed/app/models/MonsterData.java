package models;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import lombok.Builder;
import lombok.Value;

@Value @Builder
public class MonsterData {
  List<String> headers;
  Collection<Map<String, String>> data;
}
