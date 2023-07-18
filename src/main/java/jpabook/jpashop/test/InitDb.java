//package jpabook.jpashop.test;
//
//import jpabook.jpashop.domain.Address;
//import jpabook.jpashop.domain.Member;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Component;
//
//import javax.annotation.PostConstruct;
//import javax.persistence.EntityManager;
//import javax.transaction.Transactional;
//
//@Component
//@RequiredArgsConstructor
//public class InitDb {
//
//    private final InitService initService;
//
//    @PostConstruct
//    public void init(){
//// }iniblic void init() {
//     public void init(){
//// }ini initService.dbInit1();
//    }
//
//    @Component
//    @Transactional
//    @RequiredArgsConstructor
//    static class InitService {
//
//        private final EntityManager em;
//
//        public void dbInit1() {
//            Member member = new Member();
//            member.setName("userA");
//            member.setAddress(new Address("seoul", "1", "1111"));
//            em.persist(member);
//
//        }
//    }
//}
//
//
