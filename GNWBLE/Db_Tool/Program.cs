using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;
using DAL;

namespace Db_Tool
{
    class Program
    {
        static DataProvider dp = DataProvider.GetInstance();
        static fd_ua_num f = new fd_ua_num();

        static void Main(string[] args)
        {
            TextReader reader = new StreamReader(@"C:\Users\Randy-Cofie\Documents\t2UANumbers.csv");

            string line = reader.ReadLine();
            line = reader.ReadLine();


            while (!string.IsNullOrEmpty(line))
            {
                string[] parts = line.Split(new char[] { ',' });
                string ua_num = StripString(parts[0].ToString());
                string full_name = StripString(parts[1].ToString()); ;

                if (ua_num != null)
                {
                    f.ua = ua_num;
                    f.full_name = full_name;
                }
                dp.AddUANumber(f);
                
                /*ad_shop asp = new ad_shop()
                {
                    latitude = lat,
                    location = location,
                    longitude = longi,
                    manager_name = manager,
                    name = name,
                    region_id = r.id
                };
                dp.AddAdShop(asp);*/

                line = reader.ReadLine();
            }



            reader.Close();
        }

        static string StripString(string text)
        {
            string replacedString = Regex.Replace(text, @"\(-\)", "");

            return replacedString;
        }
    }
}
