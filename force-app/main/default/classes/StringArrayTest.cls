public class StringArrayTest {
    public static List<String> generateStringArray(Integer n_arg) {
        List<String> numbers = new List<String>();
        Integer n = n_arg;
        String test = 'Test';
        for(Integer i=0; i<n;i++) {
            numbers.add('Test ' + i);
        }
        System.debug(numbers);
      	return numbers;
    }
}