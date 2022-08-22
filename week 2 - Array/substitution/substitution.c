#include <stdio.h>
#include <cs50.h>
#include <ctype.h>
#include <string.h>

bool is_characters(string s);
char cipher_text(char c, char buff[]);

int main(int argc, string argv[]) 
{
  int length1, length2, i;
  string plain;
  if(argc != 2 || !is_characters(argv[1]))
  {
    printf("Usage: ./substitution key\n");
    return 1;
  }

  length1 = strlen(argv[1]);
  char buffer[length1];
  for(i = 0; i < length1; i++)
  {
    buffer[i] = argv[1][i];
  }
  plain = get_string("plaintext: ");
  length2 = strlen(plain);
  char cipher[length2 + 1];
  for(i = 0; i < length2; i++)
  {
     cipher[i] = cipher_text(plain[i], buffer);
  }
  cipher[i] = '\0';
  printf("ciphertext: %s\n", cipher);
}

char cipher_text(char c, char buff[])
{
    char ch;
    if(islower(c))
    {
      ch = tolower(buff[c -'a']);
    }
    else if(isupper(c))
    {
      ch = toupper(buff[c - 'A']);
    }
    else
    {
      ch = c;
    }
    return ch;
}

bool is_characters(string s)
{
  int length = strlen(s);
  int array[26];

  if(length != 26)
    return false;

  for(int i = 0; i < length; i++)
  {
      array[i] = -1;
  }
  for(int i = 0; i < length; i++)
  {
      if(isalpha(s[i]))
      {
          s[i] = toupper(s[i]);
          if(array[s[i] - 'A'] != 1)
          {
            array[s[i] - 'A'] = 1;
          }
          else
          {
            return false;
          }
      }
      else
      {
        return false;
      }
  }
  return true;
}