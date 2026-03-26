CREATE TABLE test_table (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

INSERT INTO test_table (id, name) VALUES (1, 'AI Assistant');
SELECT * FROM test_table;