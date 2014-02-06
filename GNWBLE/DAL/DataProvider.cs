using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DataProvider
    {
        static DataProvider instance;
        public dbDataContext context = null;

        public static DataProvider GetInstance()
        {
            if (instance == null)
                instance = new DataProvider();
            return instance;
        }

        private DataProvider()
        {
            context = new dbDataContext();
        }

        public void CommitChanges()
        {
            context.SubmitChanges();
        }
    }
}
