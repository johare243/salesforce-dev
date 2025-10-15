public inherited sharing class RunGuard {
  private static final Set<String> seen = new Set<String>();

  public static Boolean first(String runKey) {
    return seen.add(runKey);
  }

  public static String key(
    Schema.SObjectType type,
    String context,
    String description
  ) {
    return String.valueOf(type) + '|' + context + '|' + description;
  }
}
