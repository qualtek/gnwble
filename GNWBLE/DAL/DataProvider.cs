using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;

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

        public BindingList<CourseList>ListAssignedCoursesByUser(int staff_id)
        {
            List<staff_assigned_course> list = new List<staff_assigned_course>();
            BindingList<CourseList> blist = new BindingList<CourseList>();
            list = ListOfAssignedCoursesByUser(staff_id);

            int i = 1;

            Dictionary<int, CourseList> map = new Dictionary<int, CourseList>();
            foreach (staff_assigned_course sac in list)
            {
                CourseList cl = new CourseList();
                int _trainer_id = 0;
                staff s = new staff();

                _trainer_id = int.Parse(sac.assigned_course.course.trainer_id.ToString());
                s = GetStaffById(_trainer_id);

                cl.TrainingModule = sac.assigned_course.course.name;
                cl.InternalTrainerName = string.Concat(s.first_name.ToString(), " ", s.last_name.ToString());
                cl.CourseType = sac.assigned_course.course.course_type.name;
                cl.CompletionStatus = sac.completion_status.name;
                cl.CompletionDate = DateTime.Parse(sac.assigned_course.end_date.ToString());

                map.Add(i, cl);
                i += 1;
            }

            foreach (KeyValuePair<int, CourseList> m in map)
            {
                blist.Add(m.Value);
            }

            return blist;
        }

        private course_type GetCourseTypeByCourseId(int ct_id)
        {
            return context.course_types.Where(x => x.id == ct_id).FirstOrDefault();
        }

        private staff GetStaffById(int s_id)
        {
            return context.staffs.Where(x => x.id == s_id).FirstOrDefault();
        }

        private course GetCourseName(int id)
        {
            assigned_course ac = new assigned_course();
            ac = GetCourseByAssignedCourseId(id);

            return context.courses.Where(x => x.id == ac.id).FirstOrDefault();
        }

        private assigned_course GetCourseByAssignedCourseId(int id)
        {
            return context.assigned_courses.Where(x => x.id == id).FirstOrDefault();
        }

        private List<staff_assigned_course> ListOfAssignedCoursesByUser(int staff_id)
        {
            return new List<staff_assigned_course>(context.staff_assigned_courses.Where(x => x.staff_id == staff_id).AsEnumerable());
        }

        /*public void AddUANumber(fd_ua_num f)
        {
            context.fd_ua_nums.InsertOnSubmit(f);
            context.SubmitChanges();
        }*/

        public staff GetUserRoleByEmailAddress(string email)
        {
            return context.staffs.Where(x => x.email_address == email).FirstOrDefault();
        }

        public List<role> GetUserRoles()
        {
            return new List<role>(context.roles.AsEnumerable());
        }

        public BindingList<libraryDictionary> GetListOfAllModulesCoursesAndLessons()
        {
            List<module> _list = new List<module>();
            List<course> _courseList = new List<course>();
            List<lesson> _lessonList = new List<lesson>();

            _list = GetAllModules();
            for (int i = 0; i < _list.Count; i++)
            {
                _courseList = GetCoursesByModuleId(_list[i].id);
                for (int j = 0; j < _courseList.Count; j++)
                {
                    _lessonList = GetLessonsByCourseId(_courseList[j].id);

                    Dictionary<int, libraryDictionary> map = new Dictionary<int, libraryDictionary>();
                    libraryDictionary l = new libraryDictionary();

                    map.Add(_list[i].name, l);
                }
            }
        }

        private List<lesson> GetLessonsByCourseId(int id)
        {
            return new List<lesson>(context.lessons.Where(x => x.course_id == id).AsEnumerable());
        }

        private List<course> GetCoursesByModuleId(int id)
        {
            return new List<course>(context.courses.Where(x => x.module_id == id).AsEnumerable());
        }

        private List<module> GetAllModules()
        {
            return new List<module>(context.modules.AsEnumerable());
        }


    }

    public class CourseList
    {
        public string TrainingModule { get; set; }

        public string InternalTrainerName { get; set; }

        public string CourseType { get; set; }

        public string CompletionStatus { get; set; }

        public DateTime CompletionDate { get; set; }
    }

    public class libraryDictionary
    {
        private int id { get; set; }

        private string module_name { get; set; }

        private string course_name { get; set; }

        private List<lesson> listOfLessons { get; set; }
    }
}
