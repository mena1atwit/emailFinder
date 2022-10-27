#include <stdio.h>

void question(char* s){
printf("%s", s);
}

int main(){
char* s = "1. Take the tital and remove after the \")\".\nMake this a function and have it output this Q14.\nMake sure it builds with \"gcc ./main.c\"\n2. Make a sequence diagram of\nBIOS -> DOS -> WIN3.1 (user input) and then shutdown poorly.\n";

question(s);
return 0;
}