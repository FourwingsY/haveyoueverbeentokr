package kr.haveyoueverbeento.repository;

import java.util.List;

import kr.haveyoueverbeento.web.Record;

import org.springframework.data.repository.CrudRepository;

public interface RecordRepository extends CrudRepository<Record, String>{
	List<Record> findByUserId(long userId);
}